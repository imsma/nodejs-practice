const arr = [1, 2, 3, 4, 5];

const initialValue = 0;

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

console.log(sum); // 15
