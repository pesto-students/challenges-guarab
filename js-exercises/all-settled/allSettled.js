function allSettled(promises){
  var results = Array(promises.length);
  var counter = 0;
  
  if (!isIterable(promises)) {
    throw new Error(`${typeof promises} is not iterable`);
  }

  return new Promise(resolve => {
    promises.forEach((promise, index) => {
      return Promise.resolve(promise)
        .then(result => {
          counter++;
          results[index] = { status: "fulfilled", value: result };
          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch(err => {
          counter++;
          results[index] = { status: "rejected", reason: err };
          if (counter === promises.length) {
            resolve(results);
          }
        });
    });
  });

}
export { allSettled };
