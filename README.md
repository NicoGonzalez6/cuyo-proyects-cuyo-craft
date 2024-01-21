<h1 align="center">
  <br>
  Cuyo Proyects / Cuyo Craft
  </br>
</h1>

<h4 align="center">PERSONAL THEME PRESET FOR TAILWIND</h4>

## How To Use

To use this library you will need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```bash
# Inside your proyect run
$ npm i @cuyo-proyects/cuyo-craft

# You need to import the preset to TW config

import themePreset from "@cuyo-proyects/cuyo-craft/dist";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  presets: [themePreset],
};

# import the css from tw + personal css tokens in your index.css
$ @import "@cuyo-proyects/cuyo-craft/dist";

# done!
```
