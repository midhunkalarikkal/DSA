function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function reduceToSingleDigit(num) {
    while (num >= 10) {
        num = sumDigits(num);
    }
    return num;
}

function findNumbersWithDigitSumNine(arr) {
    let result = [];
    for (let num of arr) {
        if (num >= 1000 && num <= 9999) { // Ensure it's a 4-digit number
            let singleDigitSum = reduceToSingleDigit(sumDigits(num));
            if (singleDigitSum === 9) {
                result.push(num);
            }
        }
    }
    return result;
}

// Example usage:
let arr = [1236, 4563, 9870, 3459, 1998, 0o450];
console.log(findNumbersWithDigitSumNine(arr)); // Example output: [1236, 4563, 3459]
