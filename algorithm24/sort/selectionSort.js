const arr = [9, 7, 8, 2, 5];

// 선택 정렬 
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // 본인 자신과는 비교할 필요가 없기 때문에 i+1부터 순회
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const sortedArr = selectionSort(arr);

console.log(sortedArr)