// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let max =  9999 ;
  let min =  1000 ;
const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
let number = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  return `NCC-${number}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let min =41000.0 ; 
  let max = 42000.0 ;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const letters = [ 'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T','Y'];

const randomLetter = letters[Math.floor(Math.random() * letters.length)];

return randomLetter;
}
