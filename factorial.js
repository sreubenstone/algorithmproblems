function FirstFactorial(num) {

    let multiplier = (num - 1)
    let value = num
    while (multiplier > 1) {
        value = value * multiplier
        multiplier = (multiplier - 1)
    }
    return value

}

// keep this function call here 
FirstFactorial(readline());

