module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ["vue"],
	extends: ["eslint:recommended", "plugin:vue/recommended"],
	rules: {
    "semi": [1, "always"],
		"vue/html-indent": [1, 2],
		"vue/max-attributes-per-line": [
			2,
			{
				singleline: 2,
			}
		]
	},
	overrides: [
		{
			files: ["**/*.spec.js"],
			env: {
				jest: true
			},
			plugins: ["jest"]
		}
	]
};
