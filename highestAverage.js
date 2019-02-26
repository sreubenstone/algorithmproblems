var arr = [
    ["Bobby", "87"],
    ["Charles", "100"],
    ["Eric", "65"],
    ["Charles", "22"],
    ["Charles", "37"],
    ["Eric", "49"]
];

var scores = {};

for (var i = 0; i < arr.length; i++) {
    var student = arr[i];

    if (!scores.hasOwnProperty(student[0])) { scores[student[0]] = [] }

    scores[student[0]].push(student[1])
}


for (var key in scores) {
    if (!scores.hasOwnProperty(key)) continue;

    var total = scores[key].reduce(function (next, cur) {
        return next + parseInt(cur);
    }, 0);

    scores[key] = Math.floor(total / scores[key].length);
}

function biggestProperty(obj) {
    let maxVal;
    let maxKey;
    for (let [key, value] of Object.entries(obj)) {
        if (!maxVal || value > maxVal) {
            maxVal = value;
            maxKey = key;
        }
    }
    return [maxKey, maxVal];
}





console.log(biggestProperty(scores));
