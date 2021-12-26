function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    
    let savings = 0;
    let currentOldPrice = startPriceOld;
    let decreasePerMonth = 1-(percentLossByMonth/100);
    let newPriceCurrent = startPriceNew;
    let months=0 //months
    let available = currentOldPrice - newPriceCurrent; 
    if(currentOldPrice === newPriceCurrent){
        return [0,0];
    }
    while(savings + currentOldPrice <= newPriceCurrent){
      savings += savingperMonth;
      if(months % 2 === 1){
        decreasePerMonth -= 0.005;
      }
      newPriceCurrent *= decreasePerMonth;
      currentOldPrice *= decreasePerMonth;
      available = Math.round((savings+currentOldPrice) - newPriceCurrent); 
      console.log(available);
      months++;
    }
    return [months, available];
  }
