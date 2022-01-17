module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        require('@themesberg/flowbite/plugin')
    ],
}