import { themePreset } from "./preset";

/** @type {import('tailwindcss').Config} */

const preset = {
  prefix: "cc-",
  plugins: [],
  theme: themePreset,
  corePlugins: {
    preflight: true,
  },
};

export default preset;
