"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preset_1 = require("./preset");
/** @type {import('tailwindcss').Config} */
const preset = {
    prefix: "cc-",
    plugins: [],
    theme: preset_1.themePreset,
    corePlugins: {
        preflight: true,
    },
};
exports.default = preset;
