/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eef5ff",
                    100: "#d9e8ff",
                    200: "#bcd7ff",
                    300: "#8ebfff",
                    400: "#599aff",
                    500: "#296eff",
                    600: "#1b53f5",
                    700: "#143ee1",
                    800: "#1733b6",
                    900: "#19308f",
                    950: "#141f57",
                },
                secondary: {
                    50: "#f5f6fa",
                    100: "#eaebf4",
                    200: "#d1d5e6",
                    300: "#a9b2d0",
                    400: "#7a89b6",
                    500: "#59689e",
                    600: "#465283",
                    700: "#39426b",
                    800: "#323a5a",
                    900: "#1c2334",
                    950: "#0c0f1e",
                },
            },
            padding: {
                1.75: "7px",
            },
        },
    },
    plugins: [],
};
