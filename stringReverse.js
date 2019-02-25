const string = "fat"

function FirstReverse(str) {

    const array = str.split("")
    const val = array.length
    let array1 = []
    let i;
    for (i = val - 1; i > -1; i--) {
        array1.push(array[i])
    }
    return array1.join("")

}



console.log(FirstReverse(string))