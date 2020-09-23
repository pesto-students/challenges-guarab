function diffArray(firstArr,secondArr) {
  return [
		...firstArr.filter(x => !secondArr.includes(x)),
		...secondArr.filter(x => !firstArr.includes(x))
	];  
}

export {
  diffArray,
};
