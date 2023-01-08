
/*
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strA2 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expectedA = true;

const strB1 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expectedB = false;

const strC1 = "ABCD";
const strC2 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expectedC = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    //Your code here
}

console.log(isRotation(strA1, strA2)); // expected: true
console.log(isRotation(strB1, strB2)); // expected: false
console.log(isRotation(strC1, strC2)); // expected: false
