
function balancedBraces(...args) {

  let inputStr = args[0];
  //refinement of string with only braces start

  let str = inputStr.match(/[{()}]/g).toString();
  str = str.replace(/,/g,'');


  if (str.length <= 1)
  args = false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        args = false
      }
    } else {
      stack.push(ch)
    }
  }

  args = (stack.length == 0)

  return args;
}

export {
  balancedBraces,
};
