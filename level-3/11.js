const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let value = input[i].split(' ');
    let result = parseInt(value[0]) + parseInt(value[1]);

    if (result === 0) {
        break;
    }
    else {
        console.log(result);
    }
}