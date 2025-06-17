/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gault & Millau French Brand Colors
        'gm-gold': '#FFD700', // Golden yellow header background
        'gm-gold-light': '#FFF8DC', // Light gold tint
        'gm-gold-dark': '#DAA520', // Dark gold for depth
        'gm-red': '#E31E24', // Gault & Millau signature red
        'gm-red-dark': '#C91A1F', // Darker red for hover states
        'gm-red-light': '#FF4444', // Light red for accents
        
        // Navigation icon colors
        'nav-blue': '#007BFF', // Blue for navigation icons
        'nav-green': '#28A745', // Green for navigation icons
        'nav-orange': '#FD7E14', // Orange for navigation icons
        
        // Primary Colors (Updated to match French branding)
        'primary': '#E31E24', // Gault & Millau red as primary
        'primary-50': '#FEF2F2',
        'primary-100': '#FEE2E2',
        'primary-200': '#FECACA',
        'primary-300': '#FCA5A5',
        'primary-400': '#F87171',
        'primary-500': '#E31E24',
        'primary-600': '#C91A1F',
        'primary-700': '#B91C1C',
        'primary-800': '#991B1B',
        'primary-900': '#7F1D1D',

        // Secondary Colors (Golden theme)
        'secondary': '#FFD700', // Golden yellow
        'secondary-50': '#FFFDF0',
        'secondary-100': '#FFF8DC',
        'secondary-200': '#FFF2A8',
        'secondary-300': '#FFED74',
        'secondary-400': '#FFE740',
        'secondary-500': '#FFD700',
        'secondary-600': '#DAA520',
        'secondary-700': '#B8860B',
        'secondary-800': '#967408',
        'secondary-900': '#745506',
        // Accent Colors
        'accent': '#C17B5A', // Terracotta for interactive elements and highlights
        'accent-50': '#FBF6F3', // Very light terracotta tint
        'accent-100': '#F6EDE7', // Light terracotta tint
        'accent-200': '#EDD5C7', // Medium light terracotta
        'accent-300': '#E3BDA7', // Medium terracotta
        'accent-400': '#D29C81', // Bright terracotta
        'accent-500': '#C17B5A', // Primary terracotta
        'accent-600': '#A8664A', // Medium dark terracotta
        'accent-700': '#8A543D', // Dark terracotta
        'accent-800': '#67402E', // Very dark terracotta
        'accent-900': '#442B1F', // Darkest terracotta

        // Background Colors
        'background': '#FEFCF8', // Warm white for comfortable extended reading
        'surface': '#F7F3ED', // Subtle cream for card backgrounds and sections

        // Text Colors
        'text-primary': '#2C1810', // Rich brown for excellent readability
        'text-secondary': '#6B5B4F', // Warm gray for supporting information

        // Status Colors
        'success': '#7A8471', // Sage green for confirmations and positive actions
        'success-50': '#F6F7F6', // Very light sage tint
        'success-100': '#EDEEED', // Light sage tint
        'success-200': '#D4D7D2', // Medium light sage
        'success-300': '#BABFB7', // Medium sage
        'success-400': '#9AA39C', // Bright sage
        'success-500': '#7A8471', // Primary sage
        'success-600': '#6A7361', // Medium dark sage
        'success-700': '#575F51', // Dark sage
        'success-800': '#424740', // Very dark sage
        'success-900': '#2D302B', // Darkest sage

        'warning': '#E6A756', // Warm amber for attention without alarm
        'warning-50': '#FDF9F3', // Very light amber tint
        'warning-100': '#FAF1E7', // Light amber tint
        'warning-200': '#F2DCC2', // Medium light amber
        'warning-300': '#EAC79D', // Medium amber
        'warning-400': '#E8B779', // Bright amber
        'warning-500': '#E6A756', // Primary amber
        'warning-600': '#D19543', // Medium dark amber
        'warning-700': '#B07D37', // Dark amber
        'warning-800': '#835E2A', // Very dark amber
        'warning-900': '#563F1C', // Darkest amber

        'error': '#B85450', // Muted red for helpful error guidance
        'error-50': '#FBF3F3', // Very light red tint
        'error-100': '#F7E7E6', // Light red tint
        'error-200': '#ECC2C0', // Medium light red
        'error-300': '#E09D9A', // Medium red
        'error-400': '#D47975', // Bright red
        'error-500': '#B85450', // Primary red
        'error-600': '#A64844', // Medium dark red
        'error-700': '#8A3C39', // Dark red
        'error-800': '#672D2B', // Very dark red
        'error-900': '#441E1D', // Darkest red

        // Border Colors
        'border': '#E8DDD4', // Warm gray border
        'border-light': '#F2E9E0', // Light warm gray border
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'accent': ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.7rem' }],
        '5xl': ['3rem', { lineHeight: '3.6rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
        '7xl': ['4.5rem', { lineHeight: '5.4rem' }],
        '8xl': ['6rem', { lineHeight: '7.2rem' }],
        '9xl': ['8rem', { lineHeight: '9.6rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(44, 24, 16, 0.08)',
        'warm-lg': '0 8px 32px rgba(44, 24, 16, 0.12)',
        'warm-xl': '0 12px 48px rgba(44, 24, 16, 0.16)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}