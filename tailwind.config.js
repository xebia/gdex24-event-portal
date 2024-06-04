/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    './assets/js/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
   '@tailwindcss/forms',
   require('@tailwindcss/typography'),
  ],
}

