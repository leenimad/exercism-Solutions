// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

export function timeToMixJuice(name) {

    let number = 0; 
switch (name){
     
  case 'Pure Strawberry Joy': 
    number=0.5;
     return number ;
    break;
  case 'Energizer':
case 'Green Garden':
    number = 1.5 ; 
    return number ;
    break;
  case 'Tropical Island' :
    number =3 ;
return number ;
    break;  
  case   'All or Nothing':
    number = 5 ;
    return number ;
    break;
    default : 
     number= 2.5 ; 
    return number ;
}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

export function limesToCut(wedgesNeeded, limes) {
  let totalWedges=0;
  let numberOfLimesCut=0 ; 
  let wedges=0;
  let i=0;
  while (totalWedges < wedgesNeeded && i < limes.length){
   switch (limes[i]){
    case 'small':
         wedges=6;
         break;
    case 'medium':     
          wedges=8;
         break;
    case 'large':
          wedges=10;
         break;  
   }
    totalWedges += wedges ;
    numberOfLimesCut +=1;
    i++;
  }
    return numberOfLimesCut ;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  
  while (timeLeft > 0 && orders.length > 0) {
    let juiceName = orders[0]; 
    let timeToMix = timeToMixJuice(juiceName); 
    timeLeft = timeLeft - timeToMix;
    orders.shift(); 
  }

  
  return orders;
}
