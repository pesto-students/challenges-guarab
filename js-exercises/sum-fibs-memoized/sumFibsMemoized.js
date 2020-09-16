function sumFibs(num) {
  let sum = 1;
  let n = 1;

  while(sum <= num){
    let currFib=cacheFunction(n)
    if(currFib%2===1 && currFib<=num){
      sum += currFib;
    }
    n++
  }
  return sum;
  
}

function cacheFunction(n) {
  if(n <= 1) return 1;
  return cacheFunction(n-1) + cacheFunction(n-2)
}

export { sumFibs, cacheFunction };
