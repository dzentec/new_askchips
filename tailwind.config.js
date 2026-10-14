/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components.html",
    "./pcb.html",
    "./about.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: '#2563eb',
            hover: '#1d4ed8',
            light: '#eff6ff',
            dark: '#1e40af',
          },
          emerald: {
            DEFAULT: '#059669',
            hover: '#047857',
            light: '#ecfdf5',
            dark: '#065f46',
          },
        },
        destructive: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c',
          light: '#fef2f2',
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      boxShadow: {
        'industrial': '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.08)',
        'industrial-md': '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08)',
        'industrial-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
