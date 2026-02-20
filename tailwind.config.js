/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,html,mdx}",
    "./app/components/**/*.stories.@(js|ts)",
    "./.storybook/**/*.{js,ts}",
  ],
};
