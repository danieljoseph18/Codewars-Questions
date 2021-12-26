var isPP = function(n){
    let second;
    if(Number.isInteger(Math.sqrt(n))){
        second = 2;
    } else if(Number.isInteger(Math.cbrt(n))){
        second = 3;
    } else {
        for(let i=4; i<Math.sqrt(n)+1; i++){
            number = (Math.pow(n,1/i))
            
            if(Number.isInteger(number)){
                second = i;
                break
            }
        }
    }    
    let first = Math.round(Math.pow(n,1/second));
    if(second !== undefined){
        return [first, second];
    } else {
        return null
    }

}
