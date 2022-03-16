// /////////// Frequency Counter/////

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/a-z0=9/.test(char)) {
      if (result[char] > 0) result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

// console.log(charCount("This is the 1000'th time I'm attemting lol"));

function same(arr1, arr2) {
  return arr1.every((val) => {
    let squared = val * val;
    if (arr2.includes(squared)) return true;
    return false;
  });
}

// console.log(same([2, 4, 5], [4, 16, 225]));

function samee(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
}

// console.log(samee([2, 4, 5], [4, 16, 25]));

////// Anagrams /////
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]]++;
    }
  }
  for (let i of str2) {
    if (!obj[i]) return false;
    else {
      obj[i] -= 1;
    }
  }

  return true;
}

// console.log(validAnagram("azz", "zza"));

////////// Multiple Pointers-countUniqueValues////

function countUniqueValues(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }
  return Object.keys(obj).length;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));

////Frequency Counter////
function sameFrequency(n1, n2) {
  n1 = String(n1).split("");
  n2 = String(n2).split("");

  if (n1.length !== n2.length) return false;
  let obj = {};
  for (let i of n1) {
    if (!obj[i]) obj[i] = 1;
    obj[i]++;
  }
  for (let i = 0; i < n2.length; i++) {
    if (!obj[n2[i]]) return false;
    else obj[n2[i]] -= 1;
  }
  return true;
}

// console.log(sameFrequency(1822, 2281));

////Frequency Counter Multiple Pointers -duplicates?////

function areThereDups() {
  let arr = Array.from(arguments);
  let pointer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (pointer === arr[i]) return true;
    pointer = arr[i];
  }
  return false;
}

// console.log(areThereDups("e", "ee", "r"));

////Multiple Pointers -averagePair////

function averagePair(arr, av) {
  let pointer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] + pointer) / 2 === av) return true;
    else pointer = arr[i];
  }

  return false;
}

// console.log(averagePair([1, 3, 9], 2.5));

//////////Multiple Pointers -iSubsequence/////

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer2 < str2.length) {
    if (str2[pointer2] === str1[pointer1]) pointer1++;
    if (pointer1 === str1.length) return true;
    pointer2++;
  }
  return false;
}
// console.log(isSubsequence("sing", "sting"));

/////////SLIDING WIDNOW-maxSubarraySum///

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }
  let currTotal = total;
  for (let i = n; i < arr.length; i++) {
    console.log("i", i);
    console.log("arr[i]", arr[i]);
    currTotal += arr[i] - arr[i - n];
    console.log("arr[i - n]", arr[i - n]);
    console.log(currTotal);
    total = Math.max(currTotal, total);
  }
  return total;
}

// console.log(maxSubarraySum([100, 200, 300, 400, 450], 2)); // 700

////////Sliding Window -minSubArrayLen ///////

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

////////Sliding Window -findLongestSubstring ////
function findLongestSubstring(str) {
  let obj = {};
  let counter = 0;
  for (let i of str) {
    if (!obj[i]) obj[i] = 1;
    else obj[i]++;
  }
  for (let i of Object.values(obj)) {
    if (i === 1) counter++;
  }
  return counter;
}

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// console.log(findLongestSubstring("loloa"));
