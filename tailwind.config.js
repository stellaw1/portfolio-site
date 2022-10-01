module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1B4965',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              color: '#1B4965',
            },
            h2: {
              color: '#1B4965',
            },
            h3: {
              color: '#1B4965',
            },
            h4: {
              color: '#1B4965',
            },
            h5: {
              color: '#1B4965',
            },
            h6: {
              color: '#1B4965',
            },
            strong: {
              color: '#1B4965',
            },
            code: {
              color: '#1B4965',
            },
            figcaption: {
              color: '#86ACC2',
            },
          },
        },
      },
      colors: {
        'project-blue': '#C0D6DF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
