/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];
  //Store bracket types in a string for easy access
  const openBrackets = '({[';
  const closeBrackets = ')}]';
  for (const char of s) {
    //If current char is an open bracket push onto stack
    let index = openBrackets.indexOf(char);
    if (index !== -1) {
      stack.push(index);
    } 
    else {
      //If current char is a closing bracket and is of
      //the same type as the open bracket at the top of the stack,
      //pop the stack. Else the string is invalid.
      index = closeBrackets.indexOf(char);
      if (stack[stack.length - 1] === index) {
        stack.pop();
      } 
      else {
        return false;
      }
    }
  }
  //If string is empty then either it started empty or all open
  //brackets have a corresponding closing bracket in the right position
  return stack.length === 0;
};