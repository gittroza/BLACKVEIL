module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        blackveil: '#000000',
        silver: '#bcbcbc',
        violet: {
          DEFAULT: '#8b5cf6',
          glow: '#9f7aea'
        }
      },
      boxShadow: {
        'violet-glow': '0 8px 30px rgba(139,92,246,0.18)'
      }
    }
  },
  plugins: []
}
