/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    { pattern: /^(bg|text|border|ring)-(stone|slate|zinc|neutral|gray|amber)-(300|400|500|600|700|800|900)$/ },
    // include lighter tones used dynamically
    { pattern: /^(bg|text)-(stone|slate|zinc|neutral|gray)-(100|200)$/ },
    { pattern: /^grid-cols-(1|2|3|4|6)$/ },
    { pattern: /^(shadow|ring|ring-offset)(-|$)/ },
    { pattern: /^(p|px|py|m|mx|my|gap)-(0|0\.5|1|1\.5|2|3|4|5|6|8|10|12)$/ },
    // dynamic utility classes used in JS-rendered controls
    'fixed','top-2','right-2','z-50','backdrop-blur',
    'bg-stone-800/80','bg-stone-900','bg-stone-800','bg-stone-700','bg-stone-600','bg-stone-950',
    'text-stone-200','text-stone-300','text-stone-400','text-stone-950',
    'border-stone-600','border-amber-600','bg-amber-600',
    'rounded','rounded-lg','text-xs','px-1','px-2','py-1','py-0.5',
    'hidden'
  ]
};
