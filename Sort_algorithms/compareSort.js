const insertion = require("./InsertionSort");
const bubble = require("./BubbleSort");
const quick = require("./QuickSort");
const merge = require("./MergeSort");

const array = [];

while (array.length < 10000) {
  const num = Math.floor(Math.random() * 10000) + 1;
  if (array.indexOf(num) === -1) {
    array.push(num);
  }
}

// Insertion sort
let startTime = performance.now();
insertion.sort(array);
let endTime = performance.now();
console.log(
  `Insertion sort Time: ${((endTime - startTime) / 1000).toFixed(5)}s`
);

// Bubble Sort
startTime = performance.now();
bubble.sort(array);
endTime = performance.now();
console.log(`Bubble Sort Time: ${((endTime - startTime) / 1000).toFixed(5)}s`);

// Quick Sort
startTime = performance.now();
quick.sort(array);
endTime = performance.now();
console.log(`Quick Sort Time: ${((endTime - startTime) / 1000).toFixed(5)}s`);

//Merge Sort
startTime = performance.now();
merge.sort(array);
endTime = performance.now();
console.log(`Merge Sort Time: ${((endTime - startTime) / 1000).toFixed(5)}s`);
