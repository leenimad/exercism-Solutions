// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
const newDeck = deck.map((value)=> (value * 2));
  return newDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  let index= 0 ; 
  let newArr ; 
  for ( index ; index < deck.length; index ++){
    if (deck[index] === 3 ){
    deck.splice(index+1,0,3,3);
            index += 2;
    }
  }
  return deck ;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
   let newArr = deck.slice(4,6) ; 
   return newArr;
}
/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
 let first = deck.shift();
  let last= deck.pop();
  deck.splice((deck.length/2),0,last,first);
  return deck ;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
 let newArr= deck.filter((value)=> value === 2);
  return newArr ; 
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
const res = deck.sort((a, b) => a - b);
  return res ;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
deck.reverse();
  return deck ; 
}
