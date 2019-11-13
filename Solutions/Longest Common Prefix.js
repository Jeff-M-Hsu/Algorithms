/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  //If input is empty
  if(strs.length === 0){
    return "";
  }
  //Copy string array and sort it by length
  //Shortest string is max possible length of LCP
  //As long as the LCP applies to the longest string, it will apply to all strings
  const sortedStrs = strs.sort();
  const shortest = sortedStrs[0];
  const longest = sortedStrs[sortedStrs.length-1];
  //Count length of LCP and use substring() on shortest string to get LCP
  let i = 0;
    while(i < shortest.length && shortest[i] === longest[i]){
      i++
    }
  return shortest.substring(0, i);  
};