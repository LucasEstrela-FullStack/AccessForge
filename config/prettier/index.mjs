/** @type {import('prettier').Config} PrettierConfig */

/**
 * @type {PrettierConfig}
 */

const config = {
    plugins: ["prettier-plugin-tailwindcss"],
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "always",
    endOfline: "auto",
    bracketSameLine: false,
}

export default index