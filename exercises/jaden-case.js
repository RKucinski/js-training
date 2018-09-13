'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
/*
function jadenCase(string){
    var stringArray = string.split(" ");
    for (let i=0; i<stringArray.length; i++){
        newString = stringArray[i][0].toUpperCase()
    }
    var texte = ""
    for (let j=0; j<stringArray.length; i++){
        texte+= stringArray[i].toString() + " "
    }
    return texte
}*/
function jadenCase(string) {
    var stringArray = string.split(" ");
    var jadenArray = [];
    var jadenString = "";
    var newString = "";
    for (var i=0; i<stringArray.length; i++) {
      newString = stringArray[i][0].toUpperCase();
    
      for (var j=1; j<stringArray[i].length; j++) {
        newString += stringArray[i][j];
        
  
      }
      jadenArray.push(newString);
      
    }  
    for (var k=0; k<jadenArray.length; k++) {
      jadenString += jadenArray[k] + " ";
    }
  
  return jadenString;
    
  };

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('je suis parti'), 'Je Suis Parti ')
// End of tests */ 