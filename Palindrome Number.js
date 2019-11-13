/**
 * Determine whether an integer is a palindrome. 
 * An integer is a palindrome when it reads the same backward as forward.
 * 
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    //If x < 0, or ends with 0 and is greater than 0 it is not a palindrome
    if(x < 0 || x%10 === 0 && x !== 0){
        return false;
    }
    let num = x;
    let rev = 0;
    //Remove the right-most digit from num and 
    //append it to the right-most digit of rev
    //until num < rev
    while(num > rev){
        rev = num%10 + rev*10;
        num = Math.floor(num/10);
    }
    //Return true if num is equal to rev for numbers with even digits
    //Return true if num is equal to integer divided rev/10 for numbers with odd digits
    return(num === rev || num === Math.floor(rev/10))

    
};