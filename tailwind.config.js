module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sapDark": "#173A48",
        "sapDarkLight": "#173b4a",
        "sapMediumDark": "#0f2731",
        "sapSuperDark": "#0b1f27",
        "sapMegaDark": "#051217",    
        "sapHeaders": "#3d3d3d",
        "sapSubText": "#a0acbb",
        "sapAccentBlue": "#19ADD9",
        "sapPaleSnow": "#FBFDFE",
        "sapWhite": "#FFFFFF",
        "sapDefaultBlack": "#0E2028",
        "sapPaleGreyBlue": "#A0ACBA",
        "sapSilver": "#BBBFC5",
        "sapPaleSilver": "#DCE0E5",
        "sapGreyBlue": "#627287",
        "sapLightBlack": "#122831",
        "sapSnow": "#F9FAFC",
        "sapBrightRed": "#ff5252",
        "sapReddishOrange": "#F65E18",
        "sapJungleGreen": "#05752B",
        "sapLightGrey": "#F8F8F8",
        "sapBlackTransparent": "rgba(0,0,0, 0.4)",
        "sapBrightRedHover": "#ad0d0d",
        "sapAccentBlueHover": "#1489ab",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
