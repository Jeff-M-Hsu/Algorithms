/**
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 * 
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  //Split s into individual letters
  const strArray = s.split("");
  let answer = 0;
  //Go through each letter, adding the corresponding values based on the letter and the one before it if applicable.
  for(let i = 0; i < strArray.length; i++){
    switch(strArray[i]){
      case "M":
        if(i !== 0 && strArray[i-1] === "C"){
          answer += 800;
        }
        else answer += 1000;
        break;
      case "D":
        if(i !== 0 && strArray[i-1] === "C"){
          answer += 300;
        }
        else answer += 500;
        break;
      case "C":
        if(i !== 0 && strArray[i-1] === "X"){
          answer += 80;
        }
        else answer += 100;
        break;
      case "L":
        if(i !== 0 && strArray[i-1] === "X"){
          answer += 30;
        }
        else answer += 50;
        break;
      case "X":
        if(i !== 0 && strArray[i-1] === "I"){
          answer += 8;
        }
        else answer += 10;
        break;
      case "V":
        if(i !== 0 && strArray[i-1] === "I"){
          answer += 3;
        }
        else answer += 5;
        break;
      case "I":
        answer += 1;
        break;
    }
  }
  return answer;   
};