function list(names){
  
    if(names.length === 0){
      return ''
    } else if (names.length === 1){
      return names[0].name
    }
    let list = names.map(obj => obj = obj.name);
    let last = list.pop();
    list = list.join(', ');
    return `${list} & ${last}`
    
}
