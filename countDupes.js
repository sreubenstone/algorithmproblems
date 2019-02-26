/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function howManyRepeated(str) {
    const result = [];
    const strArr = str.toLowerCase().split("")
    console.log('strArr:', strArr)
    const array = strArr.sort()
    console.log('array', array)
    const array2 = array.join("")
    console.log('array2', array2)
    const array3 = array2.match(/(.)\1+/g);
    console.log('array3', array3)

    if (array3 != null) {
        array3.forEach((elem) => {
            result.push(elem[0]);
        });
    }
    return result;
}

const str = '333fasdffffzz'
console.log(...howManyRepeated(str));


/*
MY LOGIC ATTEMPT

--


*/