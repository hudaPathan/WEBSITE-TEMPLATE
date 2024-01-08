import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'tertiary':'#94618e',
        'secondary':'#49274a',
        'primary':'#f4decb',
        'quaternary': '#f8eee7'

      },
      borderColor:{
        'tertiary':'#94618e',
        'secondary':'#49274a',
        'primary':'#f4decb',
        'quaternary': '#f8eee7'

      },
      backgroundColor:{
        'tertiary':'#94618e',
        'secondary':'#49274a',
        'primary':'#f4decb',
        'quaternary': '#f8eee7'
      }

      
      

    },
  },
  plugins: [],
}
export default config
