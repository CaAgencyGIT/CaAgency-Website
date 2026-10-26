// Site-wide text scale (Oct 2026 client request: smaller text, most of all on
// phones). Rewrites every absolute font-size, and every px line-height, in the
// compiled CSS so two values in globals.css tune the whole site. Each size
// moves toward --text-pivot by --text-shrink: large type shrinks most, small
// labels hardly at all, so headings stay clearly larger than their body text.
// Sizes already at or below the pivot are left as they are. Relative sizes
// (em, %, keywords) follow their scaled parent and are not touched.
const SKIP = /^(inherit|initial|unset|revert|revert-layer|smaller|larger|xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large|math)$/i

function scalable(value) {
  const v = value.trim()
  if (!v || SKIP.test(v) || v.includes('--text-shrink')) return false
  if (/(^|[\d.])(em|%)\b/.test(v) && !/rem\b/.test(v)) return false
  return /px|rem|var\(|clamp\(|min\(|max\(|calc\(|vw|vh|vmin|vmax|cqw|svh|dvh/.test(v)
}

const shrink = (v) =>
  `min(${v}, calc(${v} * (1 - var(--text-shrink, 0)) + var(--text-pivot, 11px) * var(--text-shrink, 0)))`

const textScale = () => ({
  postcssPlugin: 'ca-text-scale',
  Declaration(decl) {
    if (decl.prop === 'font-size') {
      if (scalable(decl.value)) decl.value = shrink(decl.value)
    } else if (decl.prop === 'line-height') {
      const v = decl.value.trim()
      if (/^-?[\d.]+px$/.test(v)) decl.value = shrink(v)
    }
  },
})
textScale.postcss = true

export default textScale
