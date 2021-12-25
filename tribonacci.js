//provided the first 3 numbers, returns the tribonacci sequence for the first n numbers

function tribonacci(signature,n){
  let array = [];
  if(n === 0){
    return array
  } else if (n < 3){
    return signature.slice(0,n);
  }
  signature.every(x => array.push(x));
  for(let i=0; i<n-3; i++){
    let sum = (array[array.length-1]) + (array[array.length-2]) + (array[array.length-3]);
    array.push(sum);
    sum = 0;
  }
  return array;
}
