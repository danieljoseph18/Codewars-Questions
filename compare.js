//array 2 should contain the square of every element in array 1
//both arguments must be arrays 

function comp(array1, array2){
  if(!Array.isArray(array1) || !Array.isArray(array2)){
    return false
  }
  
  const sorted1 = array1.sort((a,b) => a-b);
  const sorted2 = array2.sort((a,b) => a-b);
  for(let i=0; i<sorted1.length; i++){
    if(sorted2[i] !== sorted1[i]**2){
      return false
    }
  }
  return true
}
