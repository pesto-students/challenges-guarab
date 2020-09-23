function rot13(...args) {
  const inputStr = args[0]
  const input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const output    = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  const index     = x => input.indexOf(x);
  const translate = x => index(x) > -1 ? output[index(x)] : x;
  return inputStr.split('').map(translate).join('');  
}

export {
  rot13,
};

