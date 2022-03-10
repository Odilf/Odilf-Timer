const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
	fontFamily: {
		'sans': ['InterVariable', 'ui-sans-serif', 'system-ui', ],
		'mono': ['Roboto Mono'],
	},
    extend: {
		colors: {
			'primary': '#E2E8FD',
			'secondary': '#151E3F',
		},
	},
  },

  plugins: [],
};

module.exports = config;