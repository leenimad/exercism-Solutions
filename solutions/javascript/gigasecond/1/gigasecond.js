//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const gigasecond = (date) => {
  const addedMs = 1000000000000 ; 
  const originalTime = date.getTime();
const newDate = new Date(originalTime + addedMs);
return newDate;
};
