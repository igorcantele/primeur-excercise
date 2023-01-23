//Not using `data-theme` in order to grand IE11 support
export const dynamicProperties = {
  dark: {
    "--primary-color": "hsl(231, 48%, 32%)",
    "--primary-color-light": "hsl(231, 48%, 52%)",

    "--text-color": "hsl(0, 0%, 83%)",

    "--grey": "hsl(0, 0%, 60%)",
    "--grey-light": "hsl(0, 0%, 30%)",
    "--grey-lighter": "hsl(0, 0%, 10%)",

    "--bg-color": "hsl(0, 0%, 10%)",
    "--bg-color-light": "hsl(0, 0%, 5%)",
    "--shadow-color": "hsl(0, 0%, 45%)",
  },
  light: {
    "--primary-color": "hsl(231, 48%, 48%)",
    "--primary-color-light": "hsl(231, 48%, 68%)",

    "--text-color": "hsl(0, 0%, 17%)",

    "--grey": "hsl(0, 0%, 40%)",
    "--grey-light": "hsl(0, 0%, 70%)",
    "--grey-lighter": "hsl(0, 0%, 90%)",

    "--bg-color": "hsl(0, 0%, 97%)",
    "--bg-color-light": "hsl(0, 0%, 95%)",
    "--shadow-color": "hsl(0, 0%, 55%)",
  },
};
