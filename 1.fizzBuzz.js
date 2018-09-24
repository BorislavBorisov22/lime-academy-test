const isMultipleOf = (number, multiple) => {
    return number % multiple === 0;
}

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        const isMultipleOfThree = isMultipleOf(i, 3);
        const isMultipleOfFive = isMultipleOf(i, 5);
        let currentNumberOutput = i;
        if (isMultipleOfThree && isMultipleOfFive) {
            currentNumberOutput = 'FizzBuzz';
        } else if (isMultipleOfThree) {
            currentNumberOutput = 'Fizz';
        } else if (isMultipleOfFive) {
            currentNumberOutput = 'Buzz';
        }

        console.log(currentNumberOutput);
    }
};

fizzBuzz(30);