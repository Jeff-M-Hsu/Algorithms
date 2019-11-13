/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  //Convert to string to perform manipulation
  const intArr = Math.abs(x).toString().split("");
  let answer = "";
  //If x is negative then keep the negative sign
  if(x < 0){
      answer = "-";
  }
  //Append each digit to output starting from the end of x
  for(let i = intArr.length-1; i >=0; i--){
      answer += intArr[i];
  }
  //Check if output is a 32-bit signed integer
  if(answer > Math.pow(2,31)-1 || answer < -Math.pow(2,31)){
      answer = 0;
  }
  //Return answer in base-10
  return parseInt(answer, 10);
};