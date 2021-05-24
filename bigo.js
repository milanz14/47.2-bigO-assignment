// Simplify Big O Expressions as much as possible:

// 1. O(n+10) ==> O(N)
// 2. O(100*n) ==> O(N)
// 3. O(25) ==> O(1) or constant time
// 4. O(N^2 + N^3) ==> O(N^3)
// 5. O(N+N+N+N) ==> O(N)
// 6. O(1000* log(n) +n) ==> O(log n)
// 7. O(1000*n*log n +n) ==> O(n log n)
// 8. O(2^n + n^2) ==> O(N^2)
// 9. O(5 + 3 + 1) ==> O(1) or constant time
// 10. O(n + n^(1/2) + n^2 + n * log(n)^10) ==> O(N^2)

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
}

// Time complexity: O(N); there are N number of items printed, as the input increased, the number of items printed to the console increases linearly proportional to the size of the input

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
}

// Time complexity: Constant; will always print 10 items, no matter the input size of N

function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
}

// Time complexity: O(N) ==> will print N items if N < 10; otherwise will print 10 items. 

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
}

// Time complexity: O(N) ==> loops through the array for each item in in the array and creates a new array of evens. Will increase the number of operations as the size of the input array increases

function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
}

// Time completixty: O(N^2)

function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
}

// Time complexity: O(N^3) ?

// Answer the following questions

// 1. True or false: n^2 + n is O(n^2). ==> True
// 2. True or false: n^2 * n is O(n^3). ==> True
// 3. True or false: n^2 + n is O(n). ==> False
// 4. What’s the time complexity of the .indexOf array method? ==> O(N) worst case, best case O(1)
// 5. What’s the time complexity of the .includes array method? ==> O(N) worse case, best case O(1)
// 6. What’s the time complexity of the .forEach array method? ==> O(N)
// 7. What’s the time complexity of the .sort array method? ==> O(n log n)
// 8. What’s the time complexity of the .unshift array method? ==> O(N) since it has to be re-indexed
// 9. What’s the time complexity of the .push array method? ==> constant time since you add to the end
// 10. What’s the time complexity of the .splice array method? ==> O(N)
// 11. What’s the time complexity of the .pop array method? ==> constant time
// 12. What’s the time complexity of the Object.keys() function? ==> O(N)

//BONUS

// 13. What’s the space complexity of the Object.keys() function? ==> O(N) since the length of the array can be of any length, a 1000 item array will require 1000x more space than a 1 item array from the Object.keys()
