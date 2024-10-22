// 퀵 정렬 함수
// arr: 정렬할 배열, low: 정렬 시작 인덱스, high: 정렬 끝 인덱스
const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        // 파티션을 나누고 정렬된 배열의 피벗의 최종 위치를 얻음
        const pivotIndex = partition(arr, low, high);
        // 피벗을 기준으로 왼쪽 부분 배열을 정렬
        quickSort(arr, low, pivotIndex - 1);
        // 피벗을 기준으로 오른쪽 부분 배열을 정렬
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr; 
}

// 파티션 함수: 피벗을 기준으로 배열을 나누는 역할
// arr: 분할할 배열, low: 시작 인덱스, high: 끝 인덱스
const partition = (arr, low, high) => {
    let i = low + 1; // 피벗 다음 요소부터 시작
    let j = high; // 배열의 마지막 요소

    while (i <= j) {
        // 피벗보다 큰 요소를 찾을 때까지 i를 증가
        if (arr[i] <= arr[low]) {
            i++;
        }
        // 피벗보다 작거나 같은 요소를 찾을 때까지 j를 감소
        else if (arr[j] > arr[low]) {
            j--;
        }
        // i와 j의 요소를 교환
        else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    
    // 피벗을 올바른 위치로 이동
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j; // 피벗의 최종 위치 반환
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

console.log("정렬 전:", unsortedArray);
console.log("정렬 후:", quickSort(unsortedArray));
