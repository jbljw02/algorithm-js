// level 1 - 최소직사각형
function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        const curArr = sizes[i]; // 2차원 배열 내에서 현재 위치의 배열
        
        // 내림차순 정렬
        // 가로와 세로 중 더 큰 값을 가로로 통일
        curArr.sort((a, b) => b - a);

        // 최대값을 갱신
        if (maxWidth < curArr[0]) maxWidth = curArr[0];
        if (maxHeight < curArr[1]) maxHeight = curArr[1];
    }

    return maxWidth * maxHeight;
}