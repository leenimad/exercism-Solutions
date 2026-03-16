 //@ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export let birdsPerDay ;
export function totalBirdCount(birdsPerDay) {
  let totalCount=0;
  for (let i = 0 ; i< birdsPerDay.length ; i++){
    totalCount += birdsPerDay[i];
    
  }
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export let week=0;
export let birdInWeek ;
export function birdsInWeek(birdsPerDay, week) {

 const startIndex = (week - 1) * 7;
  const endIndex = startIndex + 7;
  birdInWeek = 0;
  for (let i = startIndex; i < endIndex; i++) {
    birdInWeek += birdsPerDay[i];
  }
  return birdInWeek;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
for (let i=0 ; i < birdsPerDay.length ; i++){
  if (i%2 == 0){
    birdsPerDay[i] +=1 ;
  }
}}
