module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	staticDirs: ["../public"],
	addons: [
		// Default add ons
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app",
		"@storybook/addon-interactions",

		// Added add ons
		"@storybook/addon-a11y",
		"@storybook/addon-backgrounds",
		"@storybook/addon-docs",
		"@storybook/addon-measure",
		"@storybook/addon-outline",
		"@storybook/addon-toolbars",
		"@storybook/addon-viewport",
		"storybook-addon-pseudo-states"
	],
	features: {
		postcss: false
	},
	framework: "@storybook/react",
	core: {
		builder: "webpack4"
	}
};
