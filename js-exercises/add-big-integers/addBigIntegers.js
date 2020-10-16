function addBigIntegers(intString) {
    let outputString = intString.split(/\r?\n/).reduce(function(a,b){return parseFloat(a)+parseFloat(b)}).toString();

    return outputString;
}

export { addBigIntegers };
