import textScale from './postcss-text-scale.mjs'

export default {
  plugins: [
    '@tailwindcss/postcss',
    // Runs after Tailwind so it also sees the generated utility classes.
    textScale(),
  ],
}
