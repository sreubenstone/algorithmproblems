/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. 
No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function lowest2(array) {
    let lowest = array[0]
    let secondLowest = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i]
        }
    }
    // we know lowest number now we need second lowest number
    for (let i = 0; i < array.length; i++) {
        if (array[i] === lowest) { continue }
        if (array[i] < secondLowest) {
            secondLowest = array[i]
        }
    }

    return lowest + secondLowest
}

console.log(lowest2([19, 5, 42, 4, 77]))