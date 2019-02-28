function play() {
    let array = ['steven', 'jason', 'Alexander']
    let obj1 = {
        tests: [33, 33, 44, 55],
        name: 'Steven Reubenstone'
    }
    array.forEach(item => {
        if (!obj1.hasOwnProperty(item)) {
            obj1[item] = 1
        }
    })

    console.log(obj1)

}

play()

