function findEvenIndex(arr)
{
  const sum = arr.reduce((a,b) => a+b);
  let current = 0;
  let index = 0;
  for(let element of arr){
    current += element;
    if((current-element) === sum-current){
      return index
    }
    index +=1;
  }
  return -1
}
