/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    { pattern: /^(bg|text|border|ring)-(stone|slate|zinc|neutral|gray|amber)-(300|400|500|600|700|800|900)$/ },
    { pattern: /^grid-cols-(1|2|3|4|6)$/ },
    { pattern: /^(shadow|ring|ring-offset)(-|$)/ },
    { pattern: /^(p|px|py|m|mx|my|gap)-(0|0\.5|1|1\.5|2|3|4|5|6|8|10|12)$/ }
  ]
};
