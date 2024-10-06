/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./index.html",      // O arquivo index.html na raiz
		"./src/**/*.jsx"  // Todos os arquivos .js, .jsx, .ts, e .tsx dentro da pasta src
	],
	theme: {
		extend: {
			colors: {
				tools: '#71717a83',
				headerColor: '#09090ba6',
				modal: '#00000080',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: '#71717a',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			screens: {
				'xs': '500px',
				'lg': '1115px'
			},
			keyframes: {
				'shadow-pulse': {
					'0%': {
						boxShadow: '0 0 0px 1px rgba(0, 255, 0, 0)'
					},
					'50%': {
						boxShadow: '0 0 0px 4px rgba(73, 180, 73, 0.478)'
					},
					'100%': {
						boxShadow: '0 0 0px 1px rgba(0, 255, 0, 0)'
					}
				}
			},
			animation: {
				'shadow-pulse': 'shadow-pulse 1.5s infinite'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			dropShadow: {
				'glow': '0 0 0.8rem var(--glow-color)', // Classe personalizada para drop-shadow
			  },
		}
	},
	plugins: [require("tailwindcss-animate")],
}
