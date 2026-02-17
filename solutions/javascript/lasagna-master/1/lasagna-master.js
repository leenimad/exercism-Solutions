/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0){
    return 'Lasagna is done.';
  }
    else if (remainingTime === undefined){
      return 'You forgot to set the timer.' ;
    }
  else  {
    return 'Not done, please wait.';
  }
  
}
export function preparationTime(layers, avgPrepTime=2) {
return  layers.length * avgPrepTime ; 
  
}
export function quantities (layers) {
   let noodles=0 ;
   let sauce = 0 ;
 for (let i =0 ; i<layers.length ; i++ ){
  
   if (layers[i]=== 'noodles'){
     noodles +=50 ;
    
   }
   if (layers[i]==='sauce'){
     sauce+= 0.2 ;  
   }
 }
   return {
  noodles : noodles ,
  sauce :sauce  
}
}

export function addSecretIngredient(friendsList,myList) {
  let secretIngredient = friendsList.pop();
  friendsList.push(secretIngredient);
  myList.push(secretIngredient);

  
}
export function scaleRecipe(recipe,portions) {
 const scaledRecipe = {};
  const scaleFactor = portions / 2;
  for (let ingredient in recipe) { 
   scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
  }
  return scaledRecipe;
}