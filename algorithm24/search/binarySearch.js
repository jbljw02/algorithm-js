const arr = [28, 40, 56, 63, 74, 87, 95];

// 재귀 함수를 이용해서 반복문을 사용하지 않고도 값을 찾을 때까지 작업 반복
const binarySearch = (arr, first, last, x) => {
    const midIndex = Math.ceil((first + last) / 2);

    if (first > last) {
        return -1;
    }

    // 찾는 값과 중간 값이 일치
    if (arr[midIndex] === x) {
        return midIndex;
    }
    // 찾는 값이 중간 값보다 큰 경우
    else if (arr[midIndex] < x) {
        return binarySearch(arr, midIndex + 1, last, x);
    }
    // 찾는 값이 중간 값보다 작은 경우
    else {
        return binarySearch(arr, first, midIndex - 1, x);
    }

}

const result = binarySearch(arr, 0, arr.length - 1, 40);
console.log(`위치: ${result + 1}`)