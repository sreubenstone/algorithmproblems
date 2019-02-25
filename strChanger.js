
const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function LetterChanges(str) {

    // shift over every letter one
    let array1 = str.split("")
    let array2 = []
    array1.forEach(element => {
        // which element in alph is element here?
        let index = alph.indexOf(element)
        if (index === 25) {
            array2.push('a')
        } else if (index === -1) {
            array2.push(element)
        } else {
            const update = alph[index + 1]
            array2.push(update)
        }
    });
    // yield in this step b, c, d

    // ----> Convert vowels in array2 to uppercase letters
    const vowels = ['a', 'e', 'i', 'o', 'u']
    // for each item -- check if its a vowel, if it is push uppercase if not same value to new array
    let array3 = []
    array2.forEach(element => {
        if (vowels.indexOf(element) === -1) {
            array3.push(element)
        } else {
            array3.push(element.toUpperCase())
        }
    })

    return array3.join('')

}

const value = "za*"
console.log('final value:', LetterChanges(value))