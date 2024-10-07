const arr = [3, 9, 8, 4, 5];

const heapify = (arr, length, i) => {
    let largest = i; // 현재 노드를 가장 큰 값으로 설정

    let left = 2 * i + 1; // 왼쪽 자식 노드
    let right = 2 * i + 2; // 오른쪽 자식 노드

    // 왼쪽 자식 노드가 더 클 때, largest를 왼쪽 자식 노드로 변경
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    // 오른쪽 자식 노드가 더 클 때, largest를 오른쪽 자식 노드로 변경
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    // 부모 노드가 자식 노드보다 작으면 교환
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, length, largest); // 하위 트리를 힙 정렬
    }
};

const heapSort = (arr) => {
    let length = arr.length;

    // 최대 힙 생성: 배열의 절반부터 시작해서 거꾸로 적용
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    // 정렬 과정
    for (let i = length - 1; i > 0; i--) {
        // 루트값과 마지막 요소를 교환
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // 남은 부분에 대해 힙 재구성
        heapify(arr, i, 0);
    }

    return arr;
};

const sortedArr = heapSort(arr);
console.log(sortedArr);