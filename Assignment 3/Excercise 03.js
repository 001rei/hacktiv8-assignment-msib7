// Nama : Muhammad Wildan Arya Adiwiguna

function sumArray(arr, int) {

    let output = [];

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === int) {
                let kombinasi = [arr[i] , arr[j]];
                output.push(kombinasi);
            }
            
        }
        
    }

    console.log(output)

}

// Test Case

sumArray([2,1,4,3], 5); // [ [ 2, 3 ], [ 1, 4 ] ]
sumArray([1,8,10,3], 11); // [ [ 1, 10 ], [ 8, 3 ] ]