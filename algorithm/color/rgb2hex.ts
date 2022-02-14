/**
 * rgb(255,255,255) > #ffffff
 * rgb(1,1,1) > #010101
 * rgb(1,255,1) > #01ff01
 * rgb(17,17,17) > #111111
 * rgb(12,12,12) > #ccc
 */
export const rgb2hex = (rgb: string): string =>
  rgb
    ?.match(/\d?\d?\d/gi)
    .map((color) => (+color).toString(16).padStart(2, "0"))
    .join("")
    .padStart(7, "#") ?? "";
