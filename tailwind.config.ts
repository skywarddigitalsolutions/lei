import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			gris: "#3a3b38",
			grisclaro: "#c4c4c4",
			amarillo: "#ffdf00",
		}
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
