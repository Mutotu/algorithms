////?Single Number

function singleNumber(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }

  for (let i in obj) {
    if (obj[i] === 1) return i;
  }
}
// console.log(singleNumber([4, 1, 2, 1, 2]));

////?Single Number 2
function singleNumber2(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else {
      obj[arr[i]]++;
    }
  }
  for (let i in obj) {
    if (obj[i] === 1) return i;
  }
}
console.log(singleNumber2([0, 1, 0, 1, 0, 1, 99]));

//////Longest Common Prefix

function longetsCommonPrefix(arr) {
  let i = 0;

  while (arr[0][i] && arr.every((a) => a[i] === arr[0][i])) i++;

  return arr[0].substr(0, i);
}

// console.log(longetsCommonPrefix(["flower", "flow", "flight"]));

//////Palindrome Number//
function isPalindrome(x) {
  return Number(x.toString().split("").reverse().join("")) === x;
}

// console.log(isPalindrome(1212));

//////Remove Element
function removeElement(nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
}
// console.log(removeElement([3, 2, 2, 3], 3));

/////Two Sum
function twoSUm(nums, target) {
  // let temp = 0;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[temp] + nums[i] === target) return [temp, i];
  //   else {
  //     temp++;
  //   }
  // }
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let tot = target - nums[i];
    if (tot in obj) {
      console.log(obj);
      return [i, obj[tot]];
    } else {
      obj[nums[i]] = i;
    }
  }
}
// console.log(twoSUm([3, 2, 4, 5, 3], 9));

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

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring("loloa"));

///////Class Node
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

/////
/////LINKED LISTS///
//shift  and unshifting in the front is O(1)
//pushing and popping and inserting are O(n)

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.shift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
// let myLinkedList = new LinkedList(4);
// myLinkedList.push(9);
// myLinkedList.push(91);

////////////Doubly Linked List

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    newNode = new Node(value);
    if (!this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length++;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        tmep = tmep.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.next = after;

    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const temp = this.get(index);
    temp.prev.next = null;
    temp.next.prev = null;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

// let myDouble = new DoublyLinkedList(7);

////////STACKCS
//
/////Class Node
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.top = newNode;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.length === 0) return undefined;
//     let temp = this.top;
//     this.top = this.top.next;
//     temp.next = null;
//     this.length--;
//     return temp;
//   }
// }

// let mystack = new Stack(11);

//////QUEUe
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      tmep.next = null;
    }
    this.length--;
    return temp;
  }
}
// let myQueue = new Queue(9)
////////TREES//////
// O(log n)
//divide and conquer
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (!currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}
