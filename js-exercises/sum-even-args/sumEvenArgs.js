const sumEvenArgs = (...args) => {

  let sum=0;
  for(let i of args){
    if(i%2==0){
      sum+=i;
    }
  }

  return sum;
};

export { sumEvenArgs };
