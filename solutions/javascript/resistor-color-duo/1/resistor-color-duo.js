//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow', 
  'green', 'blue', 'violet', 'grey', 'white'
];
export const decodedValue = (color) => {
 let firstDigit = COLORS.indexOf(color[0]);
  const secondDigit = COLORS.indexOf(color[1]);
  return (firstDigit * 10) + secondDigit;
};
