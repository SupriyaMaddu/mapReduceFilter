let array = [1,5,6,8];

//map,reduce,filter

let squared_array = array.map(item => item ** 2);
console.log(squared_array);

let odd_nums = array.filter(item => item % 2 !== 0);
console.log(odd_nums)

let sum = array.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);
