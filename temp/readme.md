function filterOdd(arr){
let oddNumbers = [];
for(let i = 0; i<arr.length;i++){
if(arr[i] % 2 !== 0){
oddNumbers.push(arr[i]);
};
};
return oddNumbers;
};

function sumArr(arr){
let total = 0;
for(let i = 0; i<arr.length; i++){
total += arr[i];
};

    return total;

};

const arr = [1,2,3,4,5];
oddNumbers = filterOdd(arr);
console.log(sumArr(oddNumbers));
