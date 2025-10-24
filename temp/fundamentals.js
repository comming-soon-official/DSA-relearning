// function addition(x, y) {
//   return x + y;
// }
// function division(x, y) {
//   return x / y;
// }

// console.log(addition(0, 0));

// function filterOdds(arr) {
//   let oddNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       oddNumbers.push(arr);
//     }
//   }
//   return oddNumbers;
// }
// console.log(filterOdds([1, 2, 3, 4, 5]));

// function filterOdd(arr){
//     let oddNumbers = [];
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] % 2 !== 0){
//             oddNumbers.push(arr[i]);
//         };
//     };
//     return oddNumbers;
// };

// function sumArr(arr){
//     let total = 0;
//     for(let i = 0; i<arr.length; i++){
//         total += arr[i];
//     };

//     return total;
// };

// const arr = [1,2,3,4,5];
// oddNumbers = filterOdd(arr);
// console.log(sumArr(oddNumbers));

// function collectPrimes(arr) {
//   let primes = [];
//   function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && isPrime(arr[i])) {
//       primes.push(arr[i]);
//     }
//   }
//   return { count: primes.length, primes: primes };
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr1 = [-1, 0, 1, 2, 3, "4", 5, 6, "7", 8, 9];
// console.log(collectPrimes(arr1));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const mixedArr = [-1, 0, 1, 2, 3, "4", 5.2, 6, "7", 8, 9];

// function categorizeNumbers(arr) {
//   let odds = [];
//   let evens = [];
//   let invalids = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 1) continue;
//     if (!Number.isInteger(arr[i])) {
//       invalids.push(arr[i]);
//     } else if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     } else if (arr[i] % 2 !== 0) {
//       odds.push(arr[i]);
//     }
//   }
//   return { evens, odds, invalids };
// }

// console.log(categorizeNumbers(mixedArr));

// function groupByRange(arr) {
//   let small = [];
//   let medium = [];
//   let large = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!Number.isInteger(arr[i]) || typeof arr[i] !== "number") continue;
//     if (arr[i] >= 1 && arr[i] <= 10) {
//       small.push(arr[i]);
//     } else if (arr[i] >= 11 && arr[i] <= 100) {
//       medium.push(arr[i]);
//     } else if (arr[i] >= 101) {
//       large.push(arr[i]);
//     }
//   }
//   return {
//     small,
//     medium,
//     large,
//   };
// }

// console.log(
//   groupByRange([10, 2, 50, 20, -4, "abc", 1, 300, 101, 40, 2.5, "700"]) //{ small: [ 10, 2, 1 ], medium: [ 50, 20, 40 ], large: [ 300, 101 ] }
// );

function wordLengthStats(sentence) {
  let short = [];
  let long = [];
  let wordCount = 0;
  let totalCharacters = 0;
  let currentWord = "";

  for (let i = 0; i < sentence.length; i++) {
    if (Number.isInteger(sentence[i])) continue;
    if (sentence[i] === " ") {
      if (currentWord.length <= 3) {
        short.push(currentWord);
        wordCount += 1;
        currentWord = "";
      } else {
        long.push(currentWord);
        wordCount += 1;
        currentWord = "";
      }
    } else {
      currentWord += sentence[i];
      totalCharacters += 1;
    }
  }

  return {
    short,
    long,
    average: (totalCharacters / wordCount).toFixed(2),
  };
}
const testSentence = "Hi How Are you Miss World WOuld You Dance With Me";
const mixedTestSentence = "Hi How are you Doing 5 8 -1";
const numbers = 123;

console.log(wordLengthStats(numbers));

// {
//   short: [ 'Hi', 'How', 'Are', 'you', 'You' ],
//   long: [ 'Miss', 'World', 'WOuld', 'Dance', 'With' ],
//   average: '3.90'
// }

// {
//   short: [ 'Hi', 'How', 'are', 'you', '5', '8' ],
//   long: [ 'Doing' ],
//   average: '2.86'
// }

//{ short: [], long: [], average: 'NaN' }
