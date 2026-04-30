export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  // Easy (20)
  "merge-two-sorted-arrays": {
    id: "merge-two-sorted-arrays",
    title: "Merge Two Sorted Arrays",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given two sorted integer arrays a and b, return a new sorted array containing all elements from both arrays.",
      notes: ["Do not modify the input arrays."],
    },
    examples: [
      { input: "a = [1,3,5], b = [2,4,6]", output: "[1,2,3,4,5,6]" },
      { input: "a = [], b = [0]", output: "[0]" },
      { input: "a = [1,2,2], b = [2,2,3]", output: "[1,2,2,2,2,3]" },
    ],
    constraints: ["0 ≤ a.length, b.length ≤ 10⁵", "-10⁹ ≤ values ≤ 10⁹", "a and b are sorted non-decreasing"],
    starterCode: {
      javascript: `function mergeSortedArrays(a, b) {
  // Write your solution here
  
}

// Test cases
console.log(mergeSortedArrays([1,3,5], [2,4,6])); // Expected: [1,2,3,4,5,6]
console.log(mergeSortedArrays([], [0])); // Expected: [0]
console.log(mergeSortedArrays([1,2,2], [2,2,3])); // Expected: [1,2,2,2,2,3]`,
      python: `def mergeSortedArrays(a, b):
    # Write your solution here
    pass

# Test cases
print(mergeSortedArrays([1,3,5], [2,4,6]))  # Expected: [1,2,3,4,5,6]
print(mergeSortedArrays([], [0]))  # Expected: [0]
print(mergeSortedArrays([1,2,2], [2,2,3]))  # Expected: [1,2,2,2,2,3]`,
      java: `import java.util.*;

class Solution {
    public static int[] mergeSortedArrays(int[] a, int[] b) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(mergeSortedArrays(new int[]{1,3,5}, new int[]{2,4,6}))); // Expected: [1, 2, 3, 4, 5, 6]
        System.out.println(Arrays.toString(mergeSortedArrays(new int[]{}, new int[]{0}))); // Expected: [0]
        System.out.println(Arrays.toString(mergeSortedArrays(new int[]{1,2,2}, new int[]{2,2,3}))); // Expected: [1, 2, 2, 2, 2, 3]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,4,5,6]\n[0]\n[1,2,2,2,2,3]",
      python: "[1, 2, 3, 4, 5, 6]\n[0]\n[1, 2, 2, 2, 2, 3]",
      java: "[1, 2, 3, 4, 5, 6]\n[0]\n[1, 2, 2, 2, 2, 3]",
    },
  },

  "fizzbuzz": {
    id: "fizzbuzz",
    title: "FizzBuzz",
    difficulty: "Easy",
    category: "Simulation",
    description: {
      text: "Given an integer n, return an array of strings from 1 to n where multiples of 3 are 'Fizz', multiples of 5 are 'Buzz', and multiples of both are 'FizzBuzz'.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: '["1","2","Fizz"]' },
      { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
      { input: "n = 15", output: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' },
    ],
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Write your solution here
  
}

// Test cases
console.log(fizzBuzz(3)); // Expected: ["1","2","Fizz"]
console.log(fizzBuzz(5)); // Expected: ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`,
      python: `def fizzBuzz(n):
    # Write your solution here
    pass

# Test cases
print(fizzBuzz(3))   # Expected: ["1","2","Fizz"]
print(fizzBuzz(5))   # Expected: ["1","2","Fizz","4","Buzz"]
print(fizzBuzz(15))  # Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`,
      java: `import java.util.*;

class Solution {
    public static List<String> fizzBuzz(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(fizzBuzz(3));  // Expected: [1, 2, Fizz]
        System.out.println(fizzBuzz(5));  // Expected: [1, 2, Fizz, 4, Buzz]
        System.out.println(fizzBuzz(15)); // Expected: [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]
    }
}`,
    },
    expectedOutput: {
      javascript:
        '["1","2","Fizz"]\n["1","2","Fizz","4","Buzz"]\n["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]',
      python:
        "['1', '2', 'Fizz']\n['1', '2', 'Fizz', '4', 'Buzz']\n['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']",
      java:
        "[1, 2, Fizz]\n[1, 2, Fizz, 4, Buzz]\n[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: ["An anagram uses the same characters with the same counts."],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
      { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Sliding Window",
    description: {
      text: "You are given an array prices where prices[i] is the price of a stock on the ith day. Return the maximum profit you can achieve from a single buy and a single sell.",
      notes: ["If you cannot achieve any profit, return 0."],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
      { input: "prices = [7,6,4,3,1]", output: "0" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place.",
      notes: ["Minimize total operations if possible."],
    },
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "nums = [0]", output: "[0]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
let t1 = [0,1,0,3,12];
moveZeroes(t1);
console.log(t1); // Expected: [1,3,12,0,0]
let t2 = [0];
moveZeroes(t2);
console.log(t2); // Expected: [0]`,
      python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
t1 = [0,1,0,3,12]
moveZeroes(t1)
print(t1)  # Expected: [1,3,12,0,0]
t2 = [0]
moveZeroes(t2)
print(t2)  # Expected: [0]`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] t1 = {0,1,0,3,12};
        moveZeroes(t1);
        System.out.println(Arrays.toString(t1)); // Expected: [1, 3, 12, 0, 0]
        int[] t2 = {0};
        moveZeroes(t2);
        System.out.println(Arrays.toString(t2)); // Expected: [0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]\n[0]",
      python: "[1, 3, 12, 0, 0]\n[0]",
      java: "[1, 3, 12, 0, 0]\n[0]",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: ["Your solution should use O(1) extra space if possible."],
    },
    examples: [
      { input: "nums = [2,2,1]", output: "1" },
      { input: "nums = [4,1,2,1,2]", output: "4" },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))        # Expected: 1
print(singleNumber([4,1,2,1,2]))    # Expected: 4
print(singleNumber([1]))           # Expected: 1`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1})); // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2})); // Expected: 4
        System.out.println(singleNumber(new int[]{1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Voting",
    description: {
      text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n/2⌋ times.",
      notes: ["You may assume that the majority element always exists in the array."],
    },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))  # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2})); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2",
      python: "3\n2",
      java: "3\n2",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. Return how many distinct ways you can climb to the top.",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "1+1, 2" },
      { input: "n = 3", output: "3", explanation: "1+1+1, 1+2, 2+1" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "Given a sorted array of integers nums and an integer target, return the index of target if it exists, otherwise return -1.",
      notes: ["Your solution must run in O(log n) time."],
    },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i], target ≤ 10⁴", "nums is sorted ascending", "All integers in nums are unique"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "first-unique-character": {
    id: "first-unique-character",
    title: "First Unique Character in a String",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
      notes: [],
    },
    examples: [
      { input: 's = "leetcode"', output: "0" },
      { input: 's = "loveleetcode"', output: "2" },
      { input: 's = "aabb"', output: "-1" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of lowercase English letters"],
    starterCode: {
      javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}

// Test cases
console.log(firstUniqChar("leetcode")); // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb")); // Expected: -1`,
      python: `def firstUniqChar(s):
    # Write your solution here
    pass

# Test cases
print(firstUniqChar("leetcode"))      # Expected: 0
print(firstUniqChar("loveleetcode"))  # Expected: 2
print(firstUniqChar("aabb"))          # Expected: -1`,
      java: `class Solution {
    public static int firstUniqChar(String s) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(firstUniqChar("leetcode")); // Expected: 0
        System.out.println(firstUniqChar("loveleetcode")); // Expected: 2
        System.out.println(firstUniqChar("aabb")); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "0\n2\n-1",
      python: "0\n2\n-1",
      java: "0\n2\n-1",
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given a roman numeral string s, convert it to an integer.",
      notes: ["Roman numerals use subtractive notation for IV, IX, XL, XC, CD, CM."],
    },
    examples: [
      { input: 's = "III"', output: "3" },
      { input: 's = "LVIII"', output: "58" },
      { input: 's = "MCMXCIV"', output: "1994" },
    ],
    constraints: ["1 ≤ s.length ≤ 15", "s contains valid Roman numeral characters: I,V,X,L,C,D,M"],
    starterCode: {
      javascript: `function romanToInt(s) {
  // Write your solution here
  
}

// Test cases
console.log(romanToInt("III")); // Expected: 3
console.log(romanToInt("LVIII")); // Expected: 58
console.log(romanToInt("MCMXCIV")); // Expected: 1994`,
      python: `def romanToInt(s):
    # Write your solution here
    pass

# Test cases
print(romanToInt("III"))      # Expected: 3
print(romanToInt("LVIII"))    # Expected: 58
print(romanToInt("MCMXCIV"))  # Expected: 1994`,
      java: `class Solution {
    public static int romanToInt(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(romanToInt("III")); // Expected: 3
        System.out.println(romanToInt("LVIII")); // Expected: 58
        System.out.println(romanToInt("MCMXCIV")); // Expected: 1994
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n58\n1994",
      python: "3\n58\n1994",
      java: "3\n58\n1994",
    },
  },

  "isomorphic-strings": {
    id: "isomorphic-strings",
    title: "Isomorphic Strings",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, determine if they are isomorphic. Characters in s can be replaced to get t with a one-to-one mapping.",
      notes: ["No two characters may map to the same character, but a character may map to itself."],
    },
    examples: [
      { input: 's = "egg", t = "add"', output: "true" },
      { input: 's = "foo", t = "bar"', output: "false" },
      { input: 's = "paper", t = "title"', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 5 * 10⁴", "s.length == t.length", "s and t consist of any valid ASCII characters"],
    starterCode: {
      javascript: `function isIsomorphic(s, t) {
  // Write your solution here
  
}

console.log(isIsomorphic("egg", "add")); // Expected: true
console.log(isIsomorphic("foo", "bar")); // Expected: false
console.log(isIsomorphic("paper", "title")); // Expected: true`,
      python: `def isIsomorphic(s, t):
    # Write your solution here
    pass

print(isIsomorphic("egg", "add"))     # Expected: True
print(isIsomorphic("foo", "bar"))     # Expected: False
print(isIsomorphic("paper", "title")) # Expected: True`,
      java: `class Solution {
    public static boolean isIsomorphic(String s, String t) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isIsomorphic("egg", "add")); // Expected: true
        System.out.println(isIsomorphic("foo", "bar")); // Expected: false
        System.out.println(isIsomorphic("paper", "title")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "missing-number": {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [3,0,1]", output: "2" },
      { input: "nums = [0,1]", output: "2" },
      { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All numbers of nums are unique"],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
      python: `def missingNumber(nums):
    # Write your solution here
    pass

print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([0,1]))    # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # Expected: 8`,
      java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{0,1})); // Expected: 2
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1})); // Expected: 8
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2\n8",
      python: "2\n2\n8",
      java: "2\n2\n8",
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the integer by one and return the resulting array of digits.",
      notes: ["The most significant digit is at the head of the list."],
    },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [4,3,2,1]", output: "[4,3,2,2]" },
      { input: "digits = [9]", output: "[1,0]" },
    ],
    constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9", "digits does not contain leading zeros (except number 0)"],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
  
}

console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

print(plusOne([1,2,3]))    # Expected: [1,2,4]
print(plusOne([4,3,2,1]))  # Expected: [4,3,2,2]
print(plusOne([9]))        # Expected: [1,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3}))); // Expected: [1, 2, 4]
        System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1}))); // Expected: [4, 3, 2, 2]
        System.out.println(Arrays.toString(plusOne(new int[]{9}))); // Expected: [1, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]",
      python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
      java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
    },
  },

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a sorted array nums, remove the duplicates in-place such that each unique element appears only once and return the new length k.",
      notes: ["The first k elements of nums should contain the final result in the original order."],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "k = 2" },
      { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "k = 5" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-100 ≤ nums[i] ≤ 100", "nums is sorted non-decreasing"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}

// Test cases
let a = [1,1,2];
console.log(removeDuplicates(a)); // Expected: 2
let b = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(b)); // Expected: 5`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    pass

a = [1,1,2]
print(removeDuplicates(a))  # Expected: 2
b = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(b))  # Expected: 5`,
      java: `class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        int[] a = {1,1,2};
        System.out.println(removeDuplicates(a)); // Expected: 2
        int[] b = {0,0,1,1,1,2,2,3,3,4};
        System.out.println(removeDuplicates(b)); // Expected: 5
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n5",
      python: "2\n5",
      java: "2\n5",
    },
  },

  "merge-strings-alternately": {
    id: "merge-strings-alternately",
    title: "Merge Strings Alternately",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Given two strings word1 and word2, merge them by adding letters in alternating order, starting with word1. If one string is longer, append the remaining letters.",
      notes: [],
    },
    examples: [
      { input: 'word1 = "abc", word2 = "pqr"', output: '"apbqcr"' },
      { input: 'word1 = "ab", word2 = "pqrs"', output: '"apbqrs"' },
      { input: 'word1 = "abcd", word2 = "pq"', output: '"apbqcd"' },
    ],
    constraints: ["1 ≤ word1.length, word2.length ≤ 100", "word1 and word2 consist of lowercase letters"],
    starterCode: {
      javascript: `function mergeAlternately(word1, word2) {
  // Write your solution here
  
}

console.log(mergeAlternately("abc", "pqr")); // Expected: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Expected: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Expected: "apbqcd"`,
      python: `def mergeAlternately(word1, word2):
    # Write your solution here
    pass

print(mergeAlternately("abc", "pqr"))  # Expected: "apbqcr"
print(mergeAlternately("ab", "pqrs"))  # Expected: "apbqrs"
print(mergeAlternately("abcd", "pq"))  # Expected: "apbqcd"`,
      java: `class Solution {
    public static String mergeAlternately(String word1, String word2) {
        // Write your solution here
        
        return "";
    }

    public static void main(String[] args) {
        System.out.println(mergeAlternately("abc", "pqr")); // Expected: apbqcr
        System.out.println(mergeAlternately("ab", "pqrs")); // Expected: apbqrs
        System.out.println(mergeAlternately("abcd", "pq")); // Expected: apbqcd
    }
}`,
    },
    expectedOutput: {
      javascript: "apbqcr\napbqrs\napbqcd",
      python: "apbqcr\napbqrs\napbqcd",
      java: "apbqcr\napbqrs\napbqcd",
    },
  },

  "length-of-last-word": {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    category: "String",
    description: {
      text: "Given a string s consisting of words and spaces, return the length of the last word in the string.",
      notes: ["A word is a maximal substring consisting of non-space characters only."],
    },
    examples: [
      { input: 's = "Hello World"', output: "5" },
      { input: 's = "   fly me   to   the moon  "', output: "4" },
      { input: 's = "luffy is still joyboy"', output: "6" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of only English letters and spaces ' '"],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {
  // Write your solution here
  
}

console.log(lengthOfLastWord("Hello World")); // Expected: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Expected: 6`,
      python: `def lengthOfLastWord(s):
    # Write your solution here
    pass

print(lengthOfLastWord("Hello World"))  # Expected: 5
print(lengthOfLastWord("   fly me   to   the moon  "))  # Expected: 4
print(lengthOfLastWord("luffy is still joyboy"))  # Expected: 6`,
      java: `class Solution {
    public static int lengthOfLastWord(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLastWord("Hello World")); // Expected: 5
        System.out.println(lengthOfLastWord("   fly me   to   the moon  ")); // Expected: 4
        System.out.println(lengthOfLastWord("luffy is still joyboy")); // Expected: 6
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n4\n6",
      python: "5\n4\n6",
      java: "5\n4\n6",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets and in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))      # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))      # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      notes: ["Negative numbers are not palindromes."],
    },
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false" },
      { input: "x = 10", output: "false" },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isPalindromeNumber(x) {
  // Write your solution here
  
}

console.log(isPalindromeNumber(121)); // Expected: true
console.log(isPalindromeNumber(-121)); // Expected: false
console.log(isPalindromeNumber(10)); // Expected: false`,
      python: `def isPalindromeNumber(x):
    # Write your solution here
    pass

print(isPalindromeNumber(121))   # Expected: True
print(isPalindromeNumber(-121))  # Expected: False
print(isPalindromeNumber(10))    # Expected: False`,
      java: `class Solution {
    public static boolean isPalindromeNumber(int x) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindromeNumber(121)); // Expected: true
        System.out.println(isPalindromeNumber(-121)); // Expected: false
        System.out.println(isPalindromeNumber(10)); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  // Medium (20)
  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "String • Hash Table",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: [],
    },
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3" },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is the product of all the elements of nums except nums[i].",
      notes: ["Do not use division and run in O(n)."],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30", "The product of any prefix or suffix fits in 32-bit integer"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))        # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))    # Expected: [0,0,9,0,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Hash Table • Heap",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" },
      { input: "nums = [1], k = 1", output: "[1]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ number of unique elements"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
  
}

console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2] (order may vary)
console.log(topKFrequent([1], 1)); // Expected: [1]`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1,2] (order may vary)
print(topKFrequent([1], 1))            # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1, 2] (order may vary)
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1))); // Expected: [1]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]] (order may vary)
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]] (order may vary)
print(threeSum([0,1,1]))           # Expected: []
print(threeSum([0,0,0]))           # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1, -1, 2], [-1, 0, 1]] (order may vary)
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0, 0, 0]]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Prefix Sum • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals k.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,1,1], k = 2", output: "2" },
      { input: "nums = [1,2,3], k = 3", output: "2" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁴", "-1000 ≤ nums[i] ≤ 1000", "-10⁷ ≤ k ≤ 10⁷"],
    starterCode: {
      javascript: `function subarraySum(nums, k) {
  // Write your solution here
  
}

console.log(subarraySum([1,1,1], 2)); // Expected: 2
console.log(subarraySum([1,2,3], 3)); // Expected: 2`,
      python: `def subarraySum(nums, k):
    # Write your solution here
    pass

print(subarraySum([1,1,1], 2))  # Expected: 2
print(subarraySum([1,2,3], 3))  # Expected: 2`,
      java: `class Solution {
    public static int subarraySum(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1}, 2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3}, 3)); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2",
      python: "2\n2",
      java: "2\n2",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [],
    },
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
      { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti ≤ endi ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
  
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,
      python: `def merge(intervals):
    # Write your solution here
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]]))                 # Expected: [[1,5]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        
        return new int[0][0];
    }

    public static void main(String[] args) {
        int[][] a = new int[][]{{1,3},{2,6},{8,10},{15,18}};
        int[][] b = new int[][]{{1,4},{4,5}};
        System.out.println(Arrays.deepToString(merge(a))); // Expected: [[1, 6], [8, 10], [15, 18]]
        System.out.println(Arrays.deepToString(merge(b))); // Expected: [[1, 5]]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "set-matrix-zeroes": {
    id: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    category: "Array • Matrix",
    description: {
      text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
      notes: ["Try to use constant extra space."],
    },
    examples: [
      { input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" },
      { input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]", output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]" },
    ],
    constraints: ["m == matrix.length", "n == matrix[0].length", "1 ≤ m, n ≤ 200", "-2³¹ ≤ matrix[i][j] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function setZeroes(matrix) {
  // Write your solution here
  
}

let m1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(m1);
console.log(m1); // Expected: [[1,0,1],[0,0,0],[1,0,1]]`,
      python: `def setZeroes(matrix):
    # Write your solution here
    pass

m1 = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(m1)
print(m1)  # Expected: [[1,0,1],[0,0,0],[1,0,1]]`,
      java: `import java.util.*;

class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[][] m1 = new int[][]{{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(m1);
        System.out.println(Arrays.deepToString(m1)); // Expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "rotate-image": {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    category: "Array • Matrix",
    description: {
      text: "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in-place.",
      notes: [],
    },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "matrix = [[1,2],[3,4]]", output: "[[3,1],[4,2]]" },
    ],
    constraints: ["n == matrix.length == matrix[0].length", "1 ≤ n ≤ 20", "-1000 ≤ matrix[i][j] ≤ 1000"],
    starterCode: {
      javascript: `function rotate(matrix) {
  // Write your solution here
  
}

let a = [[1,2,3],[4,5,6],[7,8,9]];
rotate(a);
console.log(a); // Expected: [[7,4,1],[8,5,2],[9,6,3]]`,
      python: `def rotate(matrix):
    # Write your solution here
    pass

a = [[1,2,3],[4,5,6],[7,8,9]]
rotate(a)
print(a)  # Expected: [[7,4,1],[8,5,2],[9,6,3]]`,
      java: `import java.util.*;

class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[][] a = new int[][]{{1,2,3},{4,5,6},{7,8,9}};
        rotate(a);
        System.out.println(Arrays.deepToString(a)); // Expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day, put 0.",
      notes: [],
    },
    examples: [
      { input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
      { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]" },
    ],
    constraints: ["1 ≤ temperatures.length ≤ 10⁵", "30 ≤ temperatures[i] ≤ 100"],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
  
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // Expected: [1,1,1,0]`,
      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # Expected: [1,1,4,2,1,1,0,0]
print(dailyTemperatures([30,40,50,60]))              # Expected: [1,1,1,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73}))); // Expected: [1, 1, 4, 2, 1, 1, 0, 0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60}))); // Expected: [1, 1, 1, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]",
    },
  },

  "evaluate-reverse-polish-notation": {
    id: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    category: "Stack",
    description: {
      text: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
      notes: ["Valid operators are +, -, *, /. Division between two integers truncates toward zero."],
    },
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: "9" },
      { input: 'tokens = ["4","13","5","/","+"]', output: "6" },
    ],
    constraints: ["1 ≤ tokens.length ≤ 10⁴", "tokens[i] is an operator or an integer in [-200, 200]"],
    starterCode: {
      javascript: `function evalRPN(tokens) {
  // Write your solution here
  
}

console.log(evalRPN(["2","1","+","3","*"])); // Expected: 9
console.log(evalRPN(["4","13","5","/","+"])); // Expected: 6`,
      python: `def evalRPN(tokens):
    # Write your solution here
    pass

print(evalRPN(["2","1","+","3","*"]))     # Expected: 9
print(evalRPN(["4","13","5","/","+"]))   # Expected: 6`,
      java: `import java.util.*;

class Solution {
    public static int evalRPN(String[] tokens) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(evalRPN(new String[]{"2","1","+","3","*"})); // Expected: 9
        System.out.println(evalRPN(new String[]{"4","13","5","/","+"})); // Expected: 6
    }
}`,
    },
    expectedOutput: {
      javascript: "9\n6",
      python: "9\n6",
      java: "9\n6",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins needed to make up that amount. If not possible, return -1.",
      notes: [],
    },
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3" },
      { input: "coins = [2], amount = 3", output: "-1" },
      { input: "coins = [1], amount = 0", output: "0" },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))       # Expected: -1
print(coinChange([1], 0))       # Expected: 0`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
        System.out.println(coinChange(new int[]{1}, 0)); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order and then rotated at an unknown pivot. Given nums and a target, return the index of target if it exists, otherwise -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
      { input: "nums = [1], target = 0", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique"],
    starterCode: {
      javascript: `function searchRotated(nums, target) {
  // Write your solution here
  
}

console.log(searchRotated([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(searchRotated([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(searchRotated([1], 0)); // Expected: -1`,
      python: `def searchRotated(nums, target):
    # Write your solution here
    pass

print(searchRotated([4,5,6,7,0,1,2], 0))  # Expected: 4
print(searchRotated([4,5,6,7,0,1,2], 3))  # Expected: -1
print(searchRotated([1], 0))              # Expected: -1`,
      java: `class Solution {
    public static int searchRotated(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(searchRotated(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(searchRotated(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(searchRotated(new int[]{1}, 0)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
    },
  },

  "decode-string": {
    id: "decode-string",
    title: "Decode String",
    difficulty: "Medium",
    category: "Stack • String",
    description: {
      text: "Given an encoded string s, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.",
      notes: ["k is a positive integer and may have multiple digits."],
    },
    examples: [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
      { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"' },
    ],
    constraints: ["1 ≤ s.length ≤ 3 * 10⁴", "s consists of digits, letters, '[' and ']'", "s is valid encoded string"],
    starterCode: {
      javascript: `function decodeString(s) {
  // Write your solution here
  
}

console.log(decodeString("3[a]2[bc]")); // Expected: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Expected: "accaccacc"`,
      python: `def decodeString(s):
    # Write your solution here
    pass

print(decodeString("3[a]2[bc]"))   # Expected: "aaabcbc"
print(decodeString("3[a2[c]]"))    # Expected: "accaccacc"`,
      java: `class Solution {
    public static String decodeString(String s) {
        // Write your solution here
        
        return "";
    }

    public static void main(String[] args) {
        System.out.println(decodeString("3[a]2[bc]")); // Expected: aaabcbc
        System.out.println(decodeString("3[a2[c]]")); // Expected: accaccacc
    }
}`,
    },
    expectedOutput: {
      javascript: "aaabcbc\naccaccacc",
      python: "aaabcbc\naccaccacc",
      java: "aaabcbc\naccaccacc",
    },
  },

  "spiral-matrix": {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    category: "Array • Matrix",
    description: {
      text: "Given an m x n matrix, return all elements of the matrix in spiral order.",
      notes: [],
    },
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" },
      { input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", output: "[1,2,3,4,8,12,11,10,9,5,6,7]" },
    ],
    constraints: ["m == matrix.length", "n == matrix[0].length", "1 ≤ m, n ≤ 10", "-100 ≤ matrix[i][j] ≤ 100"],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
  // Write your solution here
  
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Expected: [1,2,3,6,9,8,7,4,5]`,
      python: `def spiralOrder(matrix):
    # Write your solution here
    pass

print(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))  # Expected: [1,2,3,6,9,8,7,4,5]`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        int[][] a = new int[][]{{1,2,3},{4,5,6},{7,8,9}};
        System.out.println(spiralOrder(a)); // Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,6,9,8,7,4,5]",
      python: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
      java: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
    },
  },

  "kth-largest-element-in-an-array": {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Heap • Quickselect",
    description: {
      text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
      notes: ["It is the kth largest element in sorted order, not the kth distinct."],
    },
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  
}

console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

print(findKthLargest([3,2,1,5,6,4], 2))  # Expected: 5`,
      java: `class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4}, 2)); // Expected: 5
    }
}`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
    },
  },

  "sort-colors": {
    id: "sort-colors",
    title: "Sort Colors",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an array nums with n objects colored red, white, or blue (0, 1, and 2), sort them in-place so that objects of the same color are adjacent.",
      notes: ["You must solve this without using the library sort function."],
    },
    examples: [
      { input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" },
      { input: "nums = [2,0,1]", output: "[0,1,2]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 300", "nums[i] is 0, 1, or 2"],
    starterCode: {
      javascript: `function sortColors(nums) {
  // Write your solution here
  
}

let a = [2,0,2,1,1,0];
sortColors(a);
console.log(a); // Expected: [0,0,1,1,2,2]`,
      python: `def sortColors(nums):
    # Write your solution here
    pass

a = [2,0,2,1,1,0]
sortColors(a)
print(a)  # Expected: [0,0,1,1,2,2]`,
      java: `import java.util.*;

class Solution {
    public static void sortColors(int[] nums) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] a = {2,0,2,1,1,0};
        sortColors(a);
        System.out.println(Arrays.toString(a)); // Expected: [0, 0, 1, 1, 2, 2]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Array • Greedy",
    description: {
      text: "You are given an integer array nums where nums[i] is the maximum jump length from index i. Return true if you can reach the last index.",
      notes: [],
    },
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true" },
      { input: "nums = [3,2,1,0,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here
  
}

console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false`,
      python: `def canJump(nums):
    # Write your solution here
    pass

print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False`,
      java: `class Solution {
    public static boolean canJump(int[] nums) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "String • Two Pointers",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
      notes: ["If there are multiple answers, return any one."],
    },
    examples: [
      { input: 's = "babad"', output: '"bab"' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ["1 ≤ s.length ≤ 1000", "s consists of digits and English letters"],
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Write your solution here
  
}

console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"`,
      python: `def longestPalindrome(s):
    # Write your solution here
    pass

print(longestPalindrome("babad"))  # Expected: "bab" or "aba"`,
      java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // Expected: bab or aba
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations where the chosen numbers sum to target. You may reuse numbers.",
      notes: ["The same combination in different order is considered the same and should be counted once."],
    },
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30", "1 ≤ candidates[i] ≤ 200", "All elements of candidates are distinct", "1 ≤ target ≤ 500"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {
  // Write your solution here
  
}

console.log(combinationSum([2,3,6,7], 7)); // Expected: [[2,2,3],[7]] (order may vary)`,
      python: `def combinationSum(candidates, target):
    # Write your solution here
    pass

print(combinationSum([2,3,6,7], 7))  # Expected: [[2,2,3],[7]] (order may vary)`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2,3,6,7}, 7)); // Expected: [[2, 2, 3], [7]] (order may vary)
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  // Hard (20)
  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search • Array",
    description: {
      text: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be O(log(m+n))."],
    },
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5" },
    ],
    constraints: ["0 ≤ nums1.length ≤ 1000", "0 ≤ nums2.length ≤ 1000", "1 ≤ nums1.length + nums2.length ≤ 2000", "-10⁶ ≤ values ≤ 10⁶"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
  
}

console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(findMedianSortedArrays([1,3], [2]))     # Expected: 2.0
print(findMedianSortedArrays([1,2], [3,4]))   # Expected: 2.5`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2})); // Expected: 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.5
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))              # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return an empty string.",
      notes: [],
    },
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "a"', output: '"a"' },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 10⁵", "s and t consist of English letters"],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here
  
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass

print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: "BANC"`,
      java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        
        return "";
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
    }
}`,
    },
    expectedOutput: {
      javascript: "BANC",
      python: "BANC",
      java: "BANC",
    },
  },

  "sliding-window-maximum": {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Array • Deque • Sliding Window",
    description: {
      text: "Given an array nums and a sliding window size k, return an array of the maximum value in each window as it moves from left to right.",
      notes: ["Try to achieve O(n)."],
    },
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" }],
    constraints: ["1 ≤ nums.length ≤ 2 * 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴", "1 ≤ k ≤ nums.length"],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
  // Write your solution here
  
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [3,3,5,5,6,7]`,
      python: `def maxSlidingWindow(nums, k):
    # Write your solution here
    pass

print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))  # Expected: [3,3,5,5,6,7]`,
      java: `import java.util.*;

class Solution {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1,3,-1,-3,5,3,6,7}, 3))); // Expected: [3, 3, 5, 5, 6, 7]
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,3,5,5,6,7]",
      python: "[3, 3, 5, 5, 6, 7]",
      java: "[3, 3, 5, 5, 6, 7]",
    },
  },

  "largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      notes: [],
    },
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10" }],
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {
  // Write your solution here
  
}

console.log(largestRectangleArea([2,1,5,6,2,3])); // Expected: 10`,
      python: `def largestRectangleArea(heights):
    # Write your solution here
    pass

print(largestRectangleArea([2,1,5,6,2,3]))  # Expected: 10`,
      java: `class Solution {
    public static int largestRectangleArea(int[] heights) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(largestRectangleArea(new int[]{2,1,5,6,2,3})); // Expected: 10
    }
}`,
    },
    expectedOutput: {
      javascript: "10",
      python: "10",
      java: "10",
    },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, replace).",
      notes: [],
    },
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: "3" },
      { input: 'word1 = "intention", word2 = "execution"', output: "5" },
    ],
    constraints: ["0 ≤ word1.length, word2.length ≤ 500", "word1 and word2 consist of lowercase English letters"],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
  
}

console.log(minDistance("horse", "ros")); // Expected: 3`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass

print(minDistance("horse", "ros"))  # Expected: 3`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros")); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Given beginWord, endWord, and a wordList, return the length of the shortest transformation sequence from beginWord to endWord, or 0 if none exists.",
      notes: ["Only one letter can be changed at a time and each transformed word must exist in the wordList."],
    },
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5" },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: "0" },
    ],
    constraints: ["1 ≤ beginWord.length ≤ 10", "wordList.length ≤ 5000", "All words have the same length"],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
  
}

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"])); // Expected: 5`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

print(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))  # Expected: 5`,
      java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(ladderLength("hit","cog", Arrays.asList("hot","dot","dog","lot","log","cog"))); // Expected: 5
    }
}`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
    },
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
      notes: ["'.' matches any single character.", "'*' matches zero or more of the preceding element."],
    },
    examples: [
      { input: 's = "aa", p = "a"', output: "false" },
      { input: 's = "aa", p = "a*"', output: "true" },
      { input: 's = "ab", p = ".*"', output: "true" },
    ],
    constraints: ["0 ≤ s.length ≤ 20", "0 ≤ p.length ≤ 30", "s contains only lowercase letters", "p contains lowercase letters, '.' and '*'"],
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Write your solution here
  
}

console.log(isMatch("aa","a")); // Expected: false`,
      python: `def isMatch(s, p):
    # Write your solution here
    pass

print(isMatch("aa","a"))  # Expected: False`,
      java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isMatch("aa","a")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "false",
      python: "False",
      java: "false",
    },
  },

  "wildcard-matching": {
    id: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given an input string s and a pattern p, implement wildcard pattern matching with support for '?' and '*'.",
      notes: ["'?' matches any single character.", "'*' matches any sequence (including empty)."],
    },
    examples: [
      { input: 's = "aa", p = "a"', output: "false" },
      { input: 's = "aa", p = "*"', output: "true" },
      { input: 's = "cb", p = "?a"', output: "false" },
    ],
    constraints: ["0 ≤ s.length, p.length ≤ 2000", "s contains only lowercase letters", "p contains lowercase letters, '?' and '*'"],
    starterCode: {
      javascript: `function isWildcardMatch(s, p) {
  // Write your solution here
  
}

console.log(isWildcardMatch("aa","*")); // Expected: true`,
      python: `def isWildcardMatch(s, p):
    # Write your solution here
    pass

print(isWildcardMatch("aa","*"))  # Expected: True`,
      java: `class Solution {
    public static boolean isWildcardMatch(String s, String p) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isWildcardMatch("aa","*")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "longest-valid-parentheses": {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    category: "Stack • Dynamic Programming",
    description: {
      text: "Given a string containing just '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
      notes: [],
    },
    examples: [
      { input: 's = "(()"', output: "2" },
      { input: 's = ")()())"', output: "4" },
    ],
    constraints: ["0 ≤ s.length ≤ 3 * 10⁴", "s[i] is '(' or ')'"],
    starterCode: {
      javascript: `function longestValidParentheses(s) {
  // Write your solution here
  
}

console.log(longestValidParentheses(")()())")); // Expected: 4`,
      python: `def longestValidParentheses(s):
    # Write your solution here
    pass

print(longestValidParentheses(")()())"))  # Expected: 4`,
      java: `class Solution {
    public static int longestValidParentheses(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestValidParentheses(")()())")); // Expected: 4
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "first-missing-positive": {
    id: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "Hard",
    category: "Array • In-place",
    description: {
      text: "Given an unsorted integer array nums, return the smallest missing positive integer.",
      notes: ["Your algorithm should run in O(n) time and use constant extra space."],
    },
    examples: [
      { input: "nums = [1,2,0]", output: "3" },
      { input: "nums = [3,4,-1,1]", output: "2" },
      { input: "nums = [7,8,9,11,12]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function firstMissingPositive(nums) {
  // Write your solution here
  
}

console.log(firstMissingPositive([3,4,-1,1])); // Expected: 2`,
      python: `def firstMissingPositive(nums):
    # Write your solution here
    pass

print(firstMissingPositive([3,4,-1,1]))  # Expected: 2`,
      java: `class Solution {
    public static int firstMissingPositive(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(firstMissingPositive(new int[]{3,4,-1,1})); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "sudoku-solver": {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    difficulty: "Hard",
    category: "Backtracking",
    description: {
      text: "Write a program to solve a Sudoku puzzle by filling the empty cells. Empty cells are indicated by '.'.",
      notes: ["You may assume the input board has only one solution."],
    },
    examples: [{ input: "board = 9x9 grid with '.' empties", output: "solved board" }],
    constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit or '.'"],
    starterCode: {
      javascript: `function solveSudoku(board) {
  // Write your solution here
  
}

console.log("Implement solveSudoku(board)");`,
      python: `def solveSudoku(board):
    # Write your solution here
    pass

print("Implement solveSudoku(board)")`,
      java: `class Solution {
    public static void solveSudoku(char[][] board) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        System.out.println("Implement solveSudoku(board)");
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking",
    description: {
      text: "Place n queens on an n×n chessboard such that no two queens attack each other. Return all distinct solutions.",
      notes: ["You may return the answer in any order."],
    },
    examples: [{ input: "n = 4", output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]" }],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {
  // Write your solution here
  
}

console.log(solveNQueens(4)); // Expected: 2 solutions (order may vary)`,
      python: `def solveNQueens(n):
    # Write your solution here
    pass

print(solveNQueens(4))  # Expected: 2 solutions (order may vary)`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(solveNQueens(4)); // Expected: 2 solutions (order may vary)
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "palindrome-partitioning-ii": {
    id: "palindrome-partitioning-ii",
    title: "Palindrome Partitioning II",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given a string s, partition s such that every substring is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s.",
      notes: [],
    },
    examples: [
      { input: 's = "aab"', output: "1" },
      { input: 's = "a"', output: "0" },
    ],
    constraints: ["1 ≤ s.length ≤ 2000", "s consists of lowercase English letters"],
    starterCode: {
      javascript: `function minCut(s) {
  // Write your solution here
  
}

console.log(minCut("aab")); // Expected: 1`,
      python: `def minCut(s):
    # Write your solution here
    pass

print(minCut("aab"))  # Expected: 1`,
      java: `class Solution {
    public static int minCut(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minCut("aab")); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
    },
  },

  "shortest-palindrome": {
    id: "shortest-palindrome",
    title: "Shortest Palindrome",
    difficulty: "Hard",
    category: "String • KMP",
    description: {
      text: "Given a string s, you can convert it to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.",
      notes: [],
    },
    examples: [
      { input: 's = "aacecaaa"', output: '"aaacecaaa"' },
      { input: 's = "abcd"', output: '"dcbabcd"' },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of lowercase English letters"],
    starterCode: {
      javascript: `function shortestPalindrome(s) {
  // Write your solution here
  
}

console.log(shortestPalindrome("abcd")); // Expected: "dcbabcd"`,
      python: `def shortestPalindrome(s):
    # Write your solution here
    pass

print(shortestPalindrome("abcd"))  # Expected: "dcbabcd"`,
      java: `class Solution {
    public static String shortestPalindrome(String s) {
        // Write your solution here
        
        return "";
    }

    public static void main(String[] args) {
        System.out.println(shortestPalindrome("abcd")); // Expected: dcbabcd
    }
}`,
    },
    expectedOutput: {
      javascript: "dcbabcd",
      python: "dcbabcd",
      java: "dcbabcd",
    },
  },

  "max-points-on-a-line": {
    id: "max-points-on-a-line",
    title: "Max Points on a Line",
    difficulty: "Hard",
    category: "Math • Geometry • Hash Table",
    description: {
      text: "Given an array of points where points[i] = [xi, yi], return the maximum number of points that lie on the same straight line.",
      notes: [],
    },
    examples: [
      { input: "points = [[1,1],[2,2],[3,3]]", output: "3" },
      { input: "points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]", output: "4" },
    ],
    constraints: ["1 ≤ points.length ≤ 300", "-10⁴ ≤ xi, yi ≤ 10⁴"],
    starterCode: {
      javascript: `function maxPoints(points) {
  // Write your solution here
  
}

console.log(maxPoints([[1,1],[2,2],[3,3]])); // Expected: 3`,
      python: `def maxPoints(points):
    # Write your solution here
    pass

print(maxPoints([[1,1],[2,2],[3,3]]))  # Expected: 3`,
      java: `class Solution {
    public static int maxPoints(int[][] points) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxPoints(new int[][]{{1,1},{2,2},{3,3}})); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  "count-of-smaller-numbers-after-self": {
    id: "count-of-smaller-numbers-after-self",
    title: "Count of Smaller Numbers After Self",
    difficulty: "Hard",
    category: "Divide and Conquer • Fenwick Tree",
    description: {
      text: "Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].",
      notes: [],
    },
    examples: [
      { input: "nums = [5,2,6,1]", output: "[2,1,1,0]" },
      { input: "nums = [-1]", output: "[0]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function countSmaller(nums) {
  // Write your solution here
  
}

console.log(countSmaller([5,2,6,1])); // Expected: [2,1,1,0]`,
      python: `def countSmaller(nums):
    # Write your solution here
    pass

print(countSmaller([5,2,6,1]))  # Expected: [2,1,1,0]`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(countSmaller(new int[]{5,2,6,1})); // Expected: [2, 1, 1, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Heap • Design",
    description: {
      text: "Design a data structure that supports adding numbers from a data stream and finding the median of all elements so far.",
      notes: ["Implement MedianFinder with addNum and findMedian."],
    },
    examples: [{ input: "addNum(1), addNum(2), findMedian() -> 1.5, addNum(3), findMedian() -> 2.0", output: "as described" }],
    constraints: ["-10⁵ ≤ num ≤ 10⁵", "At most 5 * 10⁴ calls will be made"],
    starterCode: {
      javascript: `class MedianFinder {
  constructor() {
    // Write your solution here
  }

  addNum(num) {
    // ...
  }

  findMedian() {
    // ...
  }
}

const mf = new MedianFinder();
mf.addNum(1); mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5`,
      python: `class MedianFinder:
    def __init__(self):
        # Write your solution here
        pass

    def addNum(self, num: int) -> None:
        pass

    def findMedian(self) -> float:
        pass

mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # Expected: 1.5`,
      java: `class MedianFinder {
    public MedianFinder() {
        // Write your solution here
    }

    public void addNum(int num) {
        // ...
    }

    public double findMedian() {
        return 0.0;
    }

    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println(mf.findMedian()); // Expected: 1.5
    }
}`,
    },
    expectedOutput: {
      javascript: "varies",
      python: "varies",
      java: "varies",
    },
  },

  "burst-balloons": {
    id: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "Hard",
    category: "Dynamic Programming",
    description: {
      text: "You are given n balloons, indexed from 0 to n - 1. Each balloon has a number. If you burst balloon i you gain nums[i-1] * nums[i] * nums[i+1] coins. Return the maximum coins you can collect.",
      notes: ["Treat out-of-bounds as 1."],
    },
    examples: [
      { input: "nums = [3,1,5,8]", output: "167" },
      { input: "nums = [1,5]", output: "10" },
    ],
    constraints: ["1 ≤ nums.length ≤ 300", "0 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function maxCoins(nums) {
  // Write your solution here
  
}

console.log(maxCoins([3,1,5,8])); // Expected: 167`,
      python: `def maxCoins(nums):
    # Write your solution here
    pass

print(maxCoins([3,1,5,8]))  # Expected: 167`,
      java: `class Solution {
    public static int maxCoins(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxCoins(new int[]{3,1,5,8})); // Expected: 167
    }
}`,
    },
    expectedOutput: {
      javascript: "167",
      python: "167",
      java: "167",
    },
  },

  "merge-k-sorted-arrays": {
    id: "merge-k-sorted-arrays",
    title: "Merge K Sorted Arrays",
    difficulty: "Hard",
    category: "Heap • Divide and Conquer",
    description: {
      text: "Given k sorted integer arrays, merge them into a single sorted array.",
      notes: ["This is the array version of the classic 'merge k sorted lists' problem."],
    },
    examples: [
      { input: "arrays = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "arrays = []", output: "[]" },
    ],
    constraints: ["0 ≤ k ≤ 10³", "Total number of elements ≤ 10⁵"],
    starterCode: {
      javascript: `function mergeKSortedArrays(arrays) {
  // Write your solution here
  
}

console.log(mergeKSortedArrays([[1,4,5],[1,3,4],[2,6]])); // Expected: [1,1,2,3,4,4,5,6]`,
      python: `def mergeKSortedArrays(arrays):
    # Write your solution here
    pass

print(mergeKSortedArrays([[1,4,5],[1,3,4],[2,6]]))  # Expected: [1,1,2,3,4,4,5,6]`,
      java: `import java.util.*;

class Solution {
    public static int[] mergeKSortedArrays(int[][] arrays) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        int[][] arrays = new int[][]{{1,4,5},{1,3,4},{2,6}};
        System.out.println(Arrays.toString(mergeKSortedArrays(arrays))); // Expected: [1, 1, 2, 3, 4, 4, 5, 6]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
