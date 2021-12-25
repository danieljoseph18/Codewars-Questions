//returns index of the point in the array where both sides of it are equal in value, if not returns -1
// e.g for [1,2,3,4,3,2,1] returns index 3

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
