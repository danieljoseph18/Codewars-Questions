function solve(s) {
    let stringArray = getStringArray(s);
    let sumArray = [];
    for(let i=0; i<stringArray.length; i++){
      let sum = 0
      let str = stringArray[i];
      for(let j=0; j<str.length; j++){
        let code = str.charCodeAt(j)-96;
        sum += code;
      }
      sumArray.push(sum);
    }
    
    return Math.max(...sumArray);
  };
  
  function getStringArray(string){
    let sub = string.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<sub.length; i++){
        if(vowels.includes(sub[i])){
            sub[i] = '-';
        }
    }
    
    return sub.join('').split('-');
  }
