const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '350px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '960px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    }
  },

  plugins: [],
};

module.exports = config;
