function sumFibs(num) {
  let sum = 1;
  let n = 1;

  while(sum <= num){
    let currFib=fibo(n);
    if(currFib%2===1 && currFib<=num){
      sum += currFib;
    }
    n++
  }
  return sum;
  
}

function fibo(n){
  if(n <= 1) return 1;
  return fibo(n-1) + fibo(n-2)
}

function cacheFunction(sumFibs) {
  var cacheObject={};
  return (arg) =>{
    if(arg !== undefined){
      if(cacheObject[arg] !== undefined){
        return cacheObject[arg];
      }else{
        cacheObject[arg] = sumFibs(arg);
        return cacheObject[arg];
      }
    }return sumFibs();
  }
}

export { sumFibs,fibo, cacheFunction };
