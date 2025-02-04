/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');
const { breakpoints } = require('./src/assets/config/breakpoints');
module.exports = {
    darkMode: ['selector', '[class="app-dark"]'],
    content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
    plugins: [primeui],
    theme: {
        screens: {
            sm: breakpoints.sm,
            md: breakpoints.md,
            lg: breakpoints.lg,
            xl: breakpoints.xl,
            '2xl': breakpoints['2xl']
        }
    }
};
