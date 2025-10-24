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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixedArr = [-1, 0, 1, 2, 3, "4", 5.2, 6, "7", 8, 9];

function categorizeNumbers(arr) {
  let odds = [];
  let evens = [];
  let invalids = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) continue;
    if (!Number.isInteger(arr[i])) {
      invalids.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      odds.push(arr[i]);
    }
  }
  return { evens, odds, invalids };
}

console.log(categorizeNumbers(mixedArr));
