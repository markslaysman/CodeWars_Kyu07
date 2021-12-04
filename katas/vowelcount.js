/*

https://www.codewars.com/kata/54ff3102c1bad923760001f3


Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.


Original Solve Date: 12/2/2021
*/


function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vMap = str.split('');
    vMap = vMap.map( x => x.charCodeAt(0));
    
    let asciiV = vowels.map(x => x.charCodeAt(0));
    console.log(asciiV);

    for (let i = 0; i < vMap.length; i++){
      if (asciiV.find( e => e == vMap[i])) {
          vowelsCount ++;
        } else {
          //not a vowel
        }
    }
     
    return vowelsCount;
}

// Sample Data

// Should return 5
console.log(getCount("abracadabra"));