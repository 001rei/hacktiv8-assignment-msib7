// Nama : Muhammad Wildan Arya Adiwiguna

function arrSum(arr) {

    let nilaiSekarang = 0;
    let maks = 0;
    let subArraySekarang = [];
    let subArraySementara = [];

    for (let i = 0; i < arr.length; i++) {
        
        nilaiSekarang = 0
        subArraySementara = [];

        for (let j = i; j < arr.length; j++) {

            nilaiSekarang += arr[j];
            subArraySementara.push(arr[j])

            if (nilaiSekarang > maks) {
                maks = nilaiSekarang;
                subArraySekarang = subArraySementara.slice();
            }

        }
        
    }

    console.log([subArraySekarang, maks])

}

// Test Case

arrSum( [-2,-3,4,-1,-2,1,5,-3] ) // [ [ 4, -1, -2, 1, 5 ] , 7 ]