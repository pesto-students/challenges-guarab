
function lastIndexOf(...args) {
  const searchNum=args[0];
  const arrNum = args[1];
  
  if(!arrNum.includes(searchNum)){
    args=-1;
  }
  let i;
  for(i=arrNum.length-1;i>=0;i--){
    if(arrNum[i]===searchNum){
      args = i;
      break;
    }  
  }
  return args;
}

export {
  lastIndexOf,
};
