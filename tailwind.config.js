/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        background: '#f0f0f0',
        card: '#ffffff',
        accent: '#9333ea',
        accentHover: '#7c3aed',
        highlight: '#ec4899',
        success: '#22c55e',
        error: '#ef4444',
        text: '#1f2937',
        muted: '#6b7280',
        border: '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive']
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px #1f2937',
        'retro-sm': '2px 2px 0px 0px #1f2937',
        'retro-lg': '6px 6px 0px 0px #1f2937'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    }
  },
  plugins: []
}
