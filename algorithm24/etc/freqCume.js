const freq = [1, 0, 7, 5, 4, 3];
const cume = [];

cume[0] = freq[0];

for (let i = 1; i < freq.length; i++) {
    cume[i] = cume[i - 1] + freq[i];
}

console.log(cume);