// Site-wide text scale (Oct 2026 client request: smaller text, most of all on
// phones). Rewrites every absolute font-size, and every px line-height, in the
// compiled CSS to multiply by var(--text-scale), so one value in globals.css
// tunes the whole site. Relative sizes (em, %, keywords) are left alone: they
// already follow their scaled parent.
const SKIP = /^(inherit|initial|unset|revert|revert-layer|smaller|larger|xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large|math)$/i

function scalable(value) {
  const v = value.trim()
  if (!v || SKIP.test(v) || v.includes('--text-scale')) return false
  if (/(^|[\d.])(em|%)\b/.test(v) && !/rem\b/.test(v)) return false
  return /px|rem|var\(|clamp\(|min\(|max\(|calc\(|vw|vh|vmin|vmax|cqw|svh|dvh/.test(v)
}

const textScale = () => ({
  postcssPlugin: 'ca-text-scale',
  Declaration(decl) {
    if (decl.prop === 'font-size') {
      // Reading text never drops below --text-floor (or its own original
      // size, if that was already smaller): only larger type shrinks fully.
      if (scalable(decl.value)) {
        const v = decl.value
        decl.value = `max(calc(${v} * var(--text-scale, 1)), min(${v}, var(--text-floor, 0px)))`
      }
    } else if (decl.prop === 'line-height') {
      const v = decl.value.trim()
      if (/^-?[\d.]+px$/.test(v)) decl.value = `calc(${v} * var(--text-scale, 1))`
    }
  },
})
textScale.postcss = true

export default textScale
