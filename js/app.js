// const one= 0 && 8 ||  6;
// console.log(one);
const array = new Array(1,2,3,4,5,6,7);
array.push(6);
const array2=array.filter((one)=>one>5);
console.log(array2);
const arra3=array.map((arr,index,massiv)=>{
  if (arr>5) return arr*2;
});
console.log(arra3);