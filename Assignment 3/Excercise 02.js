// Nama : Muhammad Wildan Arya Adiwiguna

function threeStepsAB (text) {

    const array = text.split('');
    let jarak = 3;

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === 'a' && i + 1 + jarak < array.length) {
            if (( array[i + 1 + jarak] ) === 'b') {
                return true;
            } 
        }

        if (array[i] === 'b' && i + 1 + jarak < array.length) {
            if (( array[i + 1 + jarak] ) === 'a') {
                return true;
            } 
        }
        
    }

    return false;

}

// Test Case

console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')) // false
console.log(threeStepsAB('you are boring')) // true 
console.log(threeStepsAB('barbarian')) // true
console.log(threeStepsAB('bacon and meat')) // false