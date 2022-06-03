const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1 ; j >= -1; j-- ){
      if (array[j] <= array[j - 1]) {
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
      console.log(array);
    }
  }
  return array;
}


let array = [5,1,3,2,4];

let sortedArray = bubbleSort(array);

console.log(sortedArray);