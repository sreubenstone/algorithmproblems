/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- every time 
you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
    let directions = {
        'n': 0,
        's': 0,
        'e': 0,
        'w': 0
    }

    walk.forEach(function (direction) {
        return directions[direction]++;
    })

    let displacement = {
        x: directions['n'] - directions['s'],
        y: directions['e'] - directions['w']
    }
    /*it take 1 min to traverse 1 block & I only have 10 minutes, 
    & I also want to attend appointment, so i want to come from where i start.*/
    return walk.length === 10 && displacement.x === 0 && displacement.y === 0;
}

let array = ['n', 's', 'w', 'e']

console.log(isValidWalk(array))
