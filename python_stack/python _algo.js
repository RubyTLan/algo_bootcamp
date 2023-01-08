/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
//Your code here
}

//TEST CODE FOR REVERSE
console.log(reverseString(str1)) // Expected: erutaerc
console.log(reverseString(str2)) // Expected: god
console.log(reverseString(str3)) // Expected: olleh
console.log(reverseString(str4)) // Expected: ""

==================================
function reverseString(str) {
  newStr = ""
  for (let letter of str){
    console.log(letter)
    newStr = letter + newStr
  }
  return newStr
}

function reverseString(str){
    var newstr = "";
    for(var i = str.length - 1; i >= 0; i--){
            newstr += str[i];
        }
    return newstr;
}

function reverseString(str) {
  var revString = ""
  for (let i = 0; i <= str.length - 1; i++) {
    revString += str[str.length - 1 - i];
  }
  return revString
}


/*
    Split the input string in to array of characters
    Pop the characters from the array and push it into a new array and return
*/
function reverseString2(str) {
    var len = str.length;
    var tempStr = str.split("");
    var revStr = [];

    for (var i=0; i<len; i++){
        revStr.push(tempStr.pop());
    }
    return revStr.join();
}

***********************************************************************
/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    //Your code here
}

console.log(join(arr1, separator1)) // Expected: "1, 2, 3"
console.log(join(arr2, separator2)) // Expected: "1-2-3"
console.log(join(arr3, separator3)) // Expected: "1 - 2 - 3"
console.log(join(arr4, separator4)) // Expected: "1"

=====================================
/*
  Acronyms
  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const str3 = "software development life cycle";
const expectedC = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expectedD = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
 function acronymize(str) {
    //Your code here
}



console.log(acronymize(str1)); // Expected: "OOP"
console.log(acronymize(str2)); // Expected: "APIE"
console.log(acronymize(str3)); // Expected: "SDLC"
console.log(acronymize(str4)); // Expected: "GIT"
===================================
function acronymize(str) {
    result = ""
    if (str == undefined)
        return result
    const words = str.split(" ")
    for (i in words)
        if (words[i][0] != undefined)
            result += words[i][0].toUpperCase()
    return result
}

function acronymizeNoSplit(str) {
    result = ""
    if (str == undefined)
        return result
    if (str[0] != " ")
        result = str[0].toUpperCase()
    for (var i=1; i<str.length; i++)
        if (str[i-1] == " " && str[i] != " ")
            result += str[i].toUpperCase()
    return result
}
=========
/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    var caps = true;
    var acrStr = "";
    for (let char of str){
        // console.log(char + " " + caps);
        if (char == " "){ //Turn the switch ON to capitalize the next non-space character and add to acrStr
            caps = true;
        } else{
            if (caps){
                // acrStr += char;
                acrStr += char.toUpperCase();
                caps = false;
            }
        }
    }
    return acrStr;
}
=============
function acronymize(str) {
    var acronym = ""
    var words = str.toUpperCase().split(' ')
    for (let i = 0; i < words.length; i++) {
        acronym += words[i].charAt(0);
    }
    return acronym
}

*******************************************************
/*
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.

  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcdddaaa";
  const expected1 = "a4b2cd3a3";
  const expected1b = "a4bbcd3a3";

  const str2 = "";
  const expected2 = "";

  const str3 = "a";
  const expected3 = "a";

  const str4 = "ccbb";
  const expected4 = "ccbb";

  const str5 = "abbbbbbbbbbbbbbbbb"
  const expected5 = "ab17"

  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  // RIOT  Read Input Output Talk

  function encodeStr(str) {
      //Your code here
  }

  console.log(encodeStr(str1)) // Expected: "a4b2cd3a3" or "a4bbcd3a3";
  console.log(encodeStr(str2)) // Expected: ""
  console.log(encodeStr(str3)) // Expected: a
  console.log(encodeStr(str4)) // Expected: ccbb
  console.log(encodeStr(str5)) // Expected: ab17
  ===================
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
  ====================
function decodeStr(str) {
    var result ="";
    var count = "";
    var char ="";
    for (let i = 0; i <= str.length; i++){
        if(isNaN(str[i])){
            let c = parseInt(count)
            for (let x = 0; x < c; x++){
                result = result + char;
            }
            char = str[i];
            count = ""
        } else {
            count = count + str[i]
        }
    }
    return result
  }
  **************************************
/*
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abba"
const expected5 = true;


function isPalindrome(str) {
    //Your code here
}

console.log(isPalindrome(str1)) //expected: true
console.log(isPalindrome(str2)) //expected: true
console.log(isPalindrome(str3)) //expected: false
console.log(isPalindrome(str4)) //expected: false
console.log(isPalindrome(str5)) //expected: true
==================
function isPalindrome(str) {
    // const str1 = "raceVScar"; len=9

    var len = str.length;
    var mid = len/2;

    for (var i=0, j=len-1; i < mid; i++, j--){
        if (str[i] != str[j]){
            return false;
        }
    }
    return true;
}
============
function decodeStr(str) {
    var decStr="";
    var letter = "";
    var num = "";

    var len = str.length;

    //
    for (var i = 0; i <= len; i++) {
        if (!isNaN(str[i])) { //if number
            num += str[i];
        } else {
            decStr += letter.repeat(num == ""? 1 : parseInt(num));
            letter = str[i];
            num = "";
        }
    }

    return decStr;
}
================
/*
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  Bob: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 *  Possible hint: .hasOwnProperty() <- Don't know it? Google it as a group!
 */
 function makeFrequencyTable(arr) {
  //Your code here
}

console.log(makeFrequencyTable(arr1))
console.log("Expected: ", expected1);
console.log(makeFrequencyTable(arr2))
console.log("Expected: ", expected2);
console.log(makeFrequencyTable(arr3))
console.log("Expected: ", expected3);

/*
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const numsA = [1];
const expectedA = 1;

const numsB = [5, 4, 5];
const expectedB = 4;

const numsC = [5, 4, 3, 4, 3, 4, 5];
const expectedC = 4; // there is a pair of 4s but one 4 has no pair.

const numsD = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedD = 1;

function oddOccurrencesInArray(nums) {
  //Your code here
}


console.log(oddOccurrencesInArray(numsA), "should equal", expectedA);
console.log(oddOccurrencesInArray(numsB), "should equal", expectedB);
console.log(oddOccurrencesInArray(numsC), "should equal", expectedC);
console.log(oddOccurrencesInArray(numsD), "should equal", expectedD);

=================================
/*
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba" // ab

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
 function stringDedupe(str) {
  //Your code here
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));

/*****************************************************************************/

/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    //Your code here
}

console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg
==================
/*
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
 function stringDedupe(str) {
    let chars = {}
    var noDupes = ""
  if(str.length == 0){
    return str;
  }
  for(let i = 0; i < str.length; i++){
    if (!chars[str[i]]){
        chars[str[i]] = str[i];
        noDupes += str[i];
    }
  }
  return noDupes;
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));
========================
function reverseWords(str) {
    var word = "";
    var space = false;
    var result = "";
    for (let i = 0; i < str.length; i++){
        if(str[i] == " " && space == false){
            result += word;
            result += " ";
            space = true;
            word = "";
        } else {
            space = false;
            word = str[i] + word;
        }
    }
    result += word;
    return result;
}

console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg
=============================
function stringDedupe(str) {
    var dict = {};
    for (let i in str) {
        var char = str[i];
        if (dict[char])
            delete dict[char];
        dict[char] = true;
    }
    var newStr = ""
    for (let key in dict) {
        newStr += key;
    }
    return newStr;
}
==========
function reverseWords(str) {
    var finalStr = "";
    for (let i = 0; i < str.length; i++) {
        var currentStr = "";
        if (finalStr != "") {
            finalStr += " ";
        }
        while (str[i] != " " && i < str.length) {
            currentStr = str[i] + currentStr;
            i++
        }
        finalStr += currentStr;
    }
    return finalStr;
}
============
/*
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // ( () () )
const expected1 = true;

const str2 = "N(0(p)3"; // ( ( )
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    //Your code here

}

console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false


/*
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";// ( {} [ ({}) ] ) [{}]!
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e"; // "({} []) {"
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k"; // () [(] {) }"
const expectedC = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    //Your code here
}
console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false
========================
/*
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // ( () () )
const expected1 = true;

const str2 = "N(0(p)3"; // ( ( )
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
const parenMap = new Map([["{", "}"],
                        ["(", ")"],
                        ["[", "]"]]);

function parensValid(str) {
    return bracesValid(str);
}

console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false


/*
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";// ( {} [ ({}) ] ) [{}]!
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e"; // "({} []) {"
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k"; // () [(] {) }"
const expectedC = false;


/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    // const strB = "D(i{a}l[ t]o)n{e";
    var len = str.length;
    var parenList = [];
    // For each character in the string, check if it is one of the valid OPEN parenthesis
    // and add the OPEN parenthesis to a list. When we encounter a CLOSE parenthesis,
    // pop the last OPEN parenthesis from the parenthesis List.
    // Check if it is the CLOSE parenthesis we are expecting for the OPEN parenthesis
    // if ( then we are expecting ), { then we are expecting }, and so on
    // if it is not what is expected return false
    for (var i=0; i < len; i++){
        // console.log(parenList);
        if (parenMap.has(str[i])) { // if a valid OPEN parenthesis
            parenList.push(str[i]);
        } else if (contains(parenMap.values(), str[i])) { // if a valid CLOSE parenthesis
            // if not a matching closing bracket
            // For example, if the last
            if (parenMap.get(parenList.pop()) != str[i]){
                return false;
            }
        }
    }
    if (parenList.length > 0){
        return false;
    }
    return true;
}

function contains(itr, letter) {
    for (var val of itr) {
        if (val == letter) {
            return true;
        }
    }
    return false;
}
console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false
==========================
/*
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/*
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    //Your code here
}

console.log(rotateStr(str, rotateAmnt1)); // expected: "Hello World"
console.log(rotateStr(str, rotateAmnt2)); // expected: "dHello Worl"
console.log(rotateStr(str, rotateAmnt3)); // expected: "ldHello Wor"
console.log(rotateStr(str, rotateAmnt4)); // expected: "orldHello W"
console.log(rotateStr(str, rotateAmnt5)); // expected: "ldHello Wor"
/*****************************************************************************/

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
=======================
function rotateStr(str, amnt) {
    var len = str.length;
    amnt %= len;
    // amnt = amnt % len;
    strArr = str.split("");
    var tempStr ="";
    // const str = "Hello World";
    for (var i=1; i <= amnt; i++){ // 1 to 4
        tempStr = strArr.pop() + tempStr; //tempStr =orld
    }
    return tempStr+strArr.join("");
}
=============
function isRotation(s1, s2) {
    var len1 = s1.length;
    var len2 = s2.length;

    if (len1 != len2){
        return false;
    }

    for (var i=1; i<len1; i++){
        // console.log(rotateStr(s2, i));
        if (s1 == rotateStr(s2, i)) {
            return true;
        }
    }
    return false;
}
================
function rotateStr(str, amnt) {
  amnt = amnt % str.length;
  // console.log(amnt);
  var result = "";
  for (let i in str) {
    console.log(typeof i)
      if (i < amnt) {
          // console.log("amnt = " + amnt);
          // console.log("i = " + i);
          // console.log("length = " + str.length);
          // console.log("maths = " + (str.length - amnt + i));
          result += str[str.length - amnt + i];
          // console.log("char = " + str[str.length - amnt + i]);
      }
      else {
          result += str[i - amnt];
      }
  }
  return result;
}
Using this code, we'll see that the index is actually being generated as a string, leading weird javascripty things happening when we try to use it to get a char at an index! Compare to:


function rotateStr(str, amnt) {
  amnt = amnt % str.length;
  // console.log(amnt);
  var result = "";
  for (let i =0; i < str.length; i++) {
    console.log(typeof i)
      if (i < amnt) {
          // console.log("amnt = " + amnt);
          // console.log("i = " + i);
          // console.log("length = " + str.length);
          // console.log("maths = " + (str.length - amnt + i));
          result += str[str.length - amnt + i];
          // console.log("char = " + str[str.length - amnt + i]);
      }
      else {
          result += str[i - amnt];
      }
  }
  return result;
}
Code was otherwise flawless

=================
// Optimized version of isRotation2() method
// For the length of the second string, check if the first char in string 1 equals char at current index of s2
//  Call the rotate string function, only if above condition is met
// For example s1=ABCDE s2 = CDEAB
// Compare A and C, <>, so continue
// Compare A and D, <>, so continue
// Compare A and E, <>, so continue
// Compare A and A, ==, so rotate s2 and compare it with s1
function isRotation3(s1, s2) {
    var len1 = s1.length;
    var len2 = s2.length;

    if (len1 != len2) {
        return false;
    }

    for (var i = 0; i < len2; i++) {
        if (s1[0] == s2[i]) {
            if (s1 == rotateStr(s2, len2 - i)) {
                return true;
            }
        }
    }
    return false;
}
==============
/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];



const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];



const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {
    //your code here
}



console.log(updateInventory(newInv1, currInv1))
console.log(updateInventory(newInv2, currInv2))
console.log(updateInventory(newInv3, currInv3))

=============
/*
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    //Your code here
}

console.log(socialDistancingEnforcer(queue1)) // false
console.log(socialDistancingEnforcer(queue2)) // true
console.log(socialDistancingEnforcer(queue3)) // true
console.log(socialDistancingEnforcer(queue4)) // true

/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/
// 0   1  2  3  4
const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;

const numsC = [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1]
const expectedC = 5



/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    //Your code here
}

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1
console.log(balanceIndex(numsC)) // 5

============
function balanceIndex(nums) {
    var len = nums.length;
    if (len < 3){
        return -1;
    }

    var leftSum = 0;
    var rightSum = 0;
    var sum = 0;

    for (var i = 0; i < len; i++) {
        sum += nums[i];
    }

    for (var i = 0; i < len; i++) {
        rightSum = sum - leftSum - nums[i];

        // console.log("i: " + i + " Left: " + leftSum + " Right: " + rightSum);

        if (leftSum == rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
}

===================
function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1;
    }
    for (var i=1; i<nums.length - 1; i++) {
        var sumBefore = 0;
        var sumAfter = 0;
        for (var j=0; j<nums.length; j++) {
            if (j<i) {
                sumBefore += nums[j]
            }
            if (j>i) {
                sumAfter += nums[j]
            }
        }
        if (sumBefore == sumAfter) {
            return i;
        }

    }
    return -1;
}

====================
function balanceIndex(nums) {


    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // Sum the elements to the left of the current index
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }

        // Sum the elements to the right of the current index
        for (let k = i + 1; k < nums.length; k++) {
            rightSum += nums[k];
        }

        // Check if the sums are equal
        if (leftSum === rightSum) {
            return i;
        }
    }

    // No balance index was found
    return -1;



}

==========
/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview):
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true; //1 for bonus

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true; //1 for bonus

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    //Your code here
}


console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
console.log(binarySearch(nums3, searchNum3)); // true (1 for bonus)

// bonus, how many times does the search num appear?
// console.log(binarySearch(nums4, searchNum4)); // 4

=====================
function countOccurrences(sortedNums, index){
    var cnt = 1;
    var searchNum = sortedNums[index];
    var flag = false;

    for (var i=1; i <sortedNums.length/2; i++){
        flag = false;
        if (sortedNums[index + i] == searchNum){
            cnt++;
            flag = true;
        }
        if (sortedNums[index - i] == searchNum){
            cnt++;
            flag = true;
        }

        if (!flag) {
            return cnt;
        }
    }
}

======================
As a registered user, I want to save items I would like to purchase in a cart so I can check out all at once.

As a website visitor, I want to be able to click a button and add my credit card information so I can buy an item online.

As a registered user, I want to be able to register for emails so I can receive shipping updates.

As a website visitor, I want to create an account as a registered user so I can save my information.

As a website visitor, I want to be able to read reviews for products so I can assess their quality before I buy.

As a website visitor, I want to be able to review products so I can share my experience with other users.

As a website visitor, I want to be able to view products categorized into groups so I can browse efficiently.

===========================
/*
  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [7, 7, 28, 28, 56, 56];
const expected3 = [7, 28, 56];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(sortedNums) {
    //Your code here
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [7, 28, 56]
console.log(dedupeSorted(nums4)); // [1]

/*
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1B = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2B = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3B = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4B = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    //Your code here

}

console.log(interleaveArrays(arrA1, arrB1)); //  [1, "a", 2, "b", 3, "c"];
console.log(interleaveArrays(arrA2, arrB2)); // [1, 2, 3, 4, 6, 8];
console.log(interleaveArrays(arrA3, arrB3)); // [1, 2, 3, 4, 5, 7];
console.log(interleaveArrays(arrA4, arrB4)); // [42, 0, 6];

=======================
const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [7, 7, 28, 28, 56, 56];
const expected3 = [7, 28, 56];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(sortedNums) {
    var newarr = []
    for ( var i = 0; i < sortedNums.length; i++){
        if (newarr.length == 0){
        newarr.push(sortedNums[i])
        }
        else if(sortedNums[i] != newarr[newarr.length-1]){
            newarr.push(sortedNums[i])
        }
    }
        return newarr
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [7, 28, 56]
console.log(dedupeSorted(nums4)); // [1]
const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1B = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2B = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3B = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4B = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    var newarr = []
    var remainingindex = 0
    for (var i = 0; i < arr1.length && i < arr2.length; i++ ){
        newarr.push(arr1[i])
        newarr.push(arr2[i])
        remainingindex++
    }
    if (arr1.length > arr2.length){
        for(var i = remainingindex; i < arr1.length; i++ ){
            newarr.push(arr1[i])

        }
    }

    if (arr2.length > arr1.length){
        for(var i = remainingindex; i < arr2.length; i++ ){
            newarr.push(arr2[i])
        }


    }
    return newarr

}

console.log(interleaveArrays(arrA1, arrB1)); //  [1, "a", 2, "b", 3, "c"];
console.log(interleaveArrays(arrA2, arrB2)); // [1, 2, 3, 4, 6, 8];
console.log(interleaveArrays(arrA3, arrB3)); // [1, 2, 3, 4, 5, 7];
console.log(interleaveArrays(arrA4, arrB4)); // [42, 0, 6];

==============
jsfunction interleaveArrays(arr1, arr2) {
    // get the length of the longest array
    var results = []
    if (arr1.length > arr2.length){
        var len = arr1.length;
    }
    else {
        var len = arr2.length;
    }
    // loop through both arrays at the same time
    for(var i=0; i < len; i++){
        if(typeof arr1[i] != "undefined"){
            // if one array's index is undefined,
            // don't push it
            results.push(arr1[i]);
        }
        //
        if(typeof arr2[i] != "undefined"){
            results.push(arr2[i]);
        }
    }
    return results;

}

=============
/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * @param {number} cents
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

 function fewestCoinChange(cents) {
    //Your code here
}

console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }

===================
@app.route('/api/parties/create', methods=['post'])
def api_create_party():
    if "user_id" not in session:
        return redirect('/')
    print(request.form)
    # if not Party.validator(request.form):
    #     return redirect('/parties/new')
    party_data = {
        **request.form,
        'user_id': session['user_id']
    }
    id = Party.create(party_data)
    logged_user = User.get_by_id({'id':session['user_id']})
    res = {
        'message': "success",
        'data': party_data,
        'user_name': f"{logged_user.first_name} {logged_user.last_name}",
        'id':id
    }
    return jsonify(res)
console.log("script linked")


function addParty(event){
    event.preventDefault()
    console.log("form submitted")

    const form = document.querySelector("#new_party")
    let formData = new FormData(form)


    fetch('/api/parties/create', {
        method: 'post',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let tableBody = document.querySelector("#table_body")
        tableBody.innerHTML += `
        <tr>
        <td>${data.data.what}</td>
        <td>${data.data.location}</td>
        <td>${data.data.date}</td>
        <td>${data.data.all_ages == 1 ? 'True' : 'False'}</td>
        <td>${data.user_name}</td>
        <td>
            <a href="/parties/${data.id}/view">View</a>
            | <a href="/parties/${data.id}/edit">Edit</a>
            | <a href="/parties/${data.id}/delete">Cancel</a>
        </td>

    </tr>
        `
    form.what.value = "";
    form.location.value = "";
    form.date.value = "";
    form.description.value = "";
    document.querySelector("#true").checked = false
    document.querySelector("#false").checked = false

    })
}

==========================================
/*
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  //Base case?
  //Any logic?
  //Recursion?
}

console.log(recursiveSigma(num1)); // 15
console.log(recursiveSigma(num2)); // 3
console.log(recursiveSigma(num3)); // 0

/*****************************************************************************/

/*
  Recursively sum an arr of ints
*/

const numsA = [1, 2, 3];
const expectedA = 6;

const numsB = [1];
const expectedB = 1;

const numsC = [];
const expectedC = 0;

/**
 * Add params if needed for recursion <-------
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
  //Your code here
  //Base case?
  //Any more logic?
  //Recursive call?
}

console.log(sumArr(numsA)) // 6
console.log(sumArr(numsB)) // 1
console.log(sumArr(numsC)) // 0
/*****************************************************************************/
=================================
/*
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  //Base case?
  //Any logic?
  //Recursion?
}

console.log(recursiveSigma(num1)); // 15
console.log(recursiveSigma(num2)); // 3
console.log(recursiveSigma(num3)); // 0

/*****************************************************************************/

/*
  Recursively sum an arr of ints
*/

const numsA = [1, 2, 3];
const expectedA = 6;

const numsB = [1];
const expectedB = 1;

const numsC = [];
const expectedC = 0;

/**
 * Add params if needed for recursion <-------
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i=0) {
  //Your code here
  //Base case?
  if (i >= nums.length){
    return 0
  }
  //Any more logic?
  let thisNum = nums[i]
  i++
  //Recursive call?
  return thisNum + sumArr(nums,i)
}

console.log(sumArr(numsA)) // 6
console.log(sumArr(numsB)) // 1
console.log(sumArr(numsC)) // 0
/*****************************************************************************/
================================================
function recursiveSigma(num) {
    //Base case?
    if (num <= 0) {
        return 0
    }
    //Any logic?
    num = Math.floor(num)
    //Recursion?
    return num + recursiveSigma(num - 1)
}

===========
/*
  Recursive Factorial
  Input: integer
  Output: integer, product of ints from 1 up to given integer

  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).

  Experts tell us 0! is 1.

  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function factorial(n) {
    //Your code here
    //Santize value?
    //Base case?
    //Recursive return / call

}


console.log(factorial(num1)) // 6
console.log(factorial(num2)) // 720
console.log(factorial(num3)) // 1

/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const numA = 5;
const expectedA = 5;

const numB = 10;
const expectedB = 1;

const numC = 25;
const expectedC = 7;

const numD = 999;// 9+9+9 = 27, 2 + 7 = 9
const expectedD = 9;
/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    //your code here
    //base case?
    //logic?
    // recursive call?
}

console.log(sumToOneDigit(numA)) // 5
console.log(sumToOneDigit(numB)) // 1
console.log(sumToOneDigit(numC)) // 7
console.log(sumToOneDigit(numD)) // 9
/*****************************************************************************/
==========================================
/*
  Return the fibonacci number at the nth position, recursively.

  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
  i.e, for n > 1 fib(n) = fib(n-1) + fib(n-2)
  */

  const num1 = 0;
  const expected1 = 0;

  const num2 = 1;
  const expected2 = 1;

  const num3 = 2;
  const expected3 = 1;

  const num4 = 3;
  const expected4 = 2;

  const num5 = 4;
  const expected5 = 3;

  const num6 = 8;
  const expected6 = 21;

  /**
   * Recursively finds the nth number in the fibonacci sequence.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} num The position of the desired number in the fibonacci sequence.
   * @returns {number} The fibonacci number at the given position.
   */
  // Finish early? Try to implement memoization. Feel free to google!

  function fibonacci(num) {
    //Base case(s)?
    //Logic?
    // Recursive call
  }

  =================================================
/*
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1".
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

const str2 = "???"
const expected2 = ['000', '001', '010', '011', '100', '101', '110', '111']

/**
 * Add params with defaults if needed for recursion <------- you will need to
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * Useful built in: .indexOf, returns index of first instance of a value, -1 if not found
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
*/
function binaryStringExpansion(str) {
    //Your code here
    // base case?

    // logic?

    // recursive call?

    // return?

}


console.log(binaryStringExpansion(str1)) // expected ["1000", "1001", "1100", "1101"]
console.log(binaryStringExpansion(str2)) // expected ['000', '001', '010', '011', '100', '101','110', '111']
==============================================
function binaryStringExpansion(str, results = []) {
    var i = str.indexOf("?")
    if (i == -1){
        results.push(str);
    }
    else{
        var strArr = str.split("");
        strArr[i] = 0;
        binaryStringExpansion(strArr.join(""), results);
        strArr[i] = 1;
        binaryStringExpansion(strArr.join(""), results);
    }

    return results;
}

=====================
