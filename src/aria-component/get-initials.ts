const tokens = [
  "zinc",
  "gray",
  "red",
  "orange",
  "amber",
  "yellow",
  "brown",
  "auburn",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

/**
 * Extrait les initiales d'un nom complet
 *
 * @param name - Le nom complet dont on veut extraire les initiales
 * @returns Les initiales en majuscules (maximum 2 caractères)
 *
 * @example
 * getInitials("John Doe") // "JD"
 * getInitials("Jean-Pierre Dupont") // "JD"
 * getInitials("Marie-Anne de la Fontaine") // "MF"
 */
export function getInitials(name: string) {
  // Remplacer les apostrophes par des espaces
  const cleanName = name.replace(/['']/, " ");

  // Diviser sur les espaces et les tirets
  const parts = cleanName.split(/[\s-]+/);

  return parts
    .map((part) => {
      // Ignorer les parties vides ou les articles/prépositions communes
      if (!part || /^(de|du|des|le|la|les|l)$/i.test(part)) {
        return "";
      }
      // Prendre le premier caractère, en gérant les caractères accentués
      return part
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .charAt(0);
    })
    .filter((v) => !!v)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Calcule la somme des codes de caractères d'une chaîne
 *
 * @param str - La chaîne à traiter
 * @returns La somme des codes de caractères
 */
function sumChars(str: string) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

/**
 * Obtient un jeton de couleur basé sur un nom
 *
 * @param name - Le nom à utiliser pour déterminer la couleur
 * @param colorless - Si true, retourne toujours la première couleur
 * @returns Un jeton de couleur (nom de couleur Tailwind)
 *
 * @example
 * getInitialsToken("John Doe", false) // Retourne une couleur basée sur le nom
 * getInitialsToken("Alice Smith", true) // Retourne toujours "zinc"
 */
export function getInitialsToken(name: string, colorless: boolean) {
  if (colorless) {
    return tokens[0];
  }

  const i = sumChars(name) % tokens.length;
  return tokens[i];
}
