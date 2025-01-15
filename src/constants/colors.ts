export const dynamicTextColors = (colors: string[]) => [
  { name: 'text primary', color: colors[2] },
  { name: 'text secondary', color: colors[3] },
  { name: 'text disabled', color: colors[4] },
  { name: 'primary', color: colors[0] },
  { name: 'secondary', color: colors[1] }
];

export const fixedColors = [
  { name: 'info', color: '#2196F3', locked: true },
  { name: 'warning', color: '#FFC107', locked: true },
  { name: 'error', color: '#DC3545', locked: true }
];