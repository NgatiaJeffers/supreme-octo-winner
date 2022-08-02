import Typography from "typography";

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    googleFonts: [
        {
            name: "Poppins",
            styles: ["800"],
        },
        {
            name: "Nunito",
            styles: ["800"],
        },
    ],
    headerFontFamily: ["Nunito", "serif"],
    bodyFontFamily: ["Poppins", "sans-serif"]
});

typography.injectStyles();

export default typography;