const factorial = (n) => {
   let result = 1;
   while (n) {
       result *= n;
       n--;
   }

   return result;
};

function music(n, k, l) {
    const result = factorial(n) * Math.pow(n - k, l - n);
    return result;
}

// sample  test cases
console.log(music(1, 0, 3)); // 1
console.log(music(1,1,3)); // 0
console.log(music(3,1,3)); // 6