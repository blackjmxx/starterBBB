const tokens = [
  'zinc',
  'gray',
  'red',
  'orange',
  'amber',
  'yellow',
  'brown',
  'auburn',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export function getInitials(name: string) {
  // Remplacer les apostrophes par des espaces
  const cleanName = name.replace(/['']/, ' ');
  
  // Diviser sur les espaces et les tirets
  const parts = cleanName.split(/[\s-]+/);
  
  return parts
    .map((part) => {
      // Ignorer les parties vides ou les articles/prépositions communes
      if (!part || /^(de|du|des|le|la|les|l)$/i.test(part)) {
        return '';
      }
      // Prendre le premier caractère, en gérant les caractères accentués
      return part.normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0);
    })
    .filter((v) => !!v)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function sumChars(str: string) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

export function getInitialsToken(name: string, colorless: boolean) {
  if (colorless) {
    return tokens[0];
  }

  const i = sumChars(name) % tokens.length;
  return tokens[i];
}
