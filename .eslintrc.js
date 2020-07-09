module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    settings: {
        "import/resolver": {
            "babel-plugin-root-import": [
                {
                    rootPathPrefix: "~",
                    rootPathSuffix: "src",
                },
                {
                    rootPathPrefix: "!",
                    rootPathSuffix: "src/components",
                },
            ],
        },
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    },
};
