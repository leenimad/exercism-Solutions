//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
const transcription ={
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};
  if (/[^GCTA]/i.test(dna)){
    throw new Error("Invalid DNA sequence provided.");
  }
  return dna
  .toUpperCase()  
    .split('')       
    .map(nucleotide => {
      return transcription[nucleotide]; 
    })
    .join('');          

};
