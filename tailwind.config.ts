import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safeList: [
    "img-intermiddle01",
    "img-intermiddle02"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img-intermiddle01": "url('/img/intermiddle01.jpg')",
        "img-intermiddle02": "url('/img/intermiddle02.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
