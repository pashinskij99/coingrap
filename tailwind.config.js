module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        base: '#2E2E3A',
        50: '#F2F3F7',
        100: '#E2E2EA',
        150: '#C6CBD9',
        200: '#9A9AAF',
        300: '#7E7E8F',
        400: '#656575',
        500: '#535362',
        600: '#262631',
        700: '#16161E',
        800: '#07070C',
      },
      light: '#F9FAFB',
      azure: '#0062FF',
      gunmetal: '#2E2E3A',
      manatee: '#9A9AAF',
      verdepom: '#24CA49',
      alizarin: '#FD4438',
      dim: '#656575',
      charleston: '#313126',
      auro: '#E80FE9',
      iris: '#6941C6',
      black: '#000000',
      white: '#FFFFFF',
      'light-purple': '#EEE6F9',
      aqua: '#06D7F6',
      orange: '#FF8743',
      table: '#667085',
      border: '#EAECF0',
      green: '#23C146',
      red: '#F14136',
      lightiris: '#F9F5FF',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: 'normal' }],
      '2xs': ['0.8125rem', { lineHeight: 'normal' }],
      sm: ['0.875rem', { lineHeight: 'normal' }],
      base: ['1rem', { lineHeight: 'normal' }],
      lg: ['1.25rem', { lineHeight: 'normal' }],
      xl: ['1.5rem', { lineHeight: 'normal' }],
      '2xl': ['1.75rem', { lineHeight: 'normal' }],
      '3xl': ['2rem', { lineHeight: 'normal' }],
      '4xl': ['2.25rem', { lineHeight: 'normal' }],
      '5xl': ['2.5rem', { lineHeight: 'normal' }],
      '6xl': ['3.5rem', { lineHeight: 'normal' }],
      '7xl': ['4.25rem', { lineHeight: 'normal' }],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
