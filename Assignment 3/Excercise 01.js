// Nama : Muhammad Wildan Arya Adiwiguna

function isArithmeticProgression (numbers) {

    let selisih = numbers[1] - numbers[0];

    for (let i = 1; i < numbers.length - 1; i++) {

        if (numbers[i + 1] - numbers[i] !== selisih){
            return false;
        } 
        
    }

    return true;

}

// Test Cases

console.log(isArithmeticProgression( [1,2,3,4,5] )); // true
console.log(isArithmeticProgression( [2,4,6,12,24] )); // false
console.log(isArithmeticProgression( [2,4,6,8] )); // true
console.log(isArithmeticProgression( [2,6,18,54] )); // false
console.log(isArithmeticProgression( [1,2,3,4,7,9] )); // false