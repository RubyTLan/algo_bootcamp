const strA = "a3b2c1d3";
  const expectedA = "aaabbcddd";

  const strB = "a3b2c12d10";
  const expectedB = "aaabbccccccccccccdddddddddd";

  /**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */
  //helpful built-ins : isNaN() .repeat() parseInt() NaN
  function decodeStr(str) {
      //Your code here
  }

  console.log(decodeStr(strA)) // Expected: aaabbcddd
  console.log(decodeStr(strB)) // Expected: aaabbccccccccccccdddddddddd
