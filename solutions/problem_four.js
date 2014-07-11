function isPalindrome(string) {
  return string == string.split('').reverse().join('');
}

var list = new Array();

for (i=999; i>=100; i--) {
  for (j=999; j>=100; j--) {
    product = i * j;
    if (isPalindrome(product.toString())) {
      list.push(product);
    }
  }
}

console.log(Math.max.apply(Math, list));
