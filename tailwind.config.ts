module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            fontSize: {
                base: '16px', // Standard base font size
                lg: '18px', // Larger text (headings, important links, etc.)
                sm: '14px', // Smaller text (footnotes, captions, etc.)
            },
        },
    },
    future: {
        unstable_disableColorOpacityUtilitiesByDefault: true, // ✅ Disables oklch() colors
    },
    plugins: [],
}
