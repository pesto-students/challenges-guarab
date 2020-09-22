
var cacheObject = {};
function cacheFunction(cb) {
  
  return (arg) =>{
    if(arg !== undefined){
      if(cacheObject[arg] !== undefined){
        return cacheObject[arg];
      }else{
        cacheObject[arg] = cb(arg);
        return cacheObject[arg];
      }
    }return cb();
  }
}

export {
  cacheFunction,
};
