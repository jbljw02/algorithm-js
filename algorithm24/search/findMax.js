const arr = [72, 60, 83, 47, 89, 95];

const findMaximum = (arr) => {
    let maxVal = 0;
    for (i = 1; i <= arr.length; i++) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

const max = findMaximum(arr);
console.log("최대값은: ", max);