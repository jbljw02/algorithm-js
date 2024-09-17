const arr = [9, 7, 8, 2, 5];

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // 현재 위치의 요소
        let j = i - 1; // 정렬된 배열의 마지막 요소

        // 현재 요소보다 큰 값을 만나면 한 칸씩 뒤로 밀기
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current; // 현재 요소를 알맞은 위치에 삽입
    }
    return arr;
}

const sortedArr = insertionSort(arr);

console.log(sortedArr);