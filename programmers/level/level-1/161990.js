// level 1 - 바탕화면 정리(구현)
function solution(wallpaper) {
    const answer = [];

    // 각 좌표의 값을 최대/최소로 정해서 더 높거나 낮은 값을 만났을 때 갱신될 수 있도록
    let [top, left, bottom, right] = [Infinity, Infinity, -Infinity, -Infinity];

    for (let i = 0; i < wallpaper.length; i++) {
        const currentRow = wallpaper[i].split('');

        currentRow.forEach((item, index) => {
            if (item === '#') {
                // ex) 가장 위쪽의 좌표는 두 값 중 더 작은 값으로 갱신
                // 이유: 최소 높이를 구해야 하기 때문
                top = Math.min(top, i);
                left = Math.min(left, index);
                bottom = Math.max(bottom, i);
                right = Math.max(right, index);
            }
        })
    }

    answer[0] = top;
    answer[1] = left;

    // 드래그의 끝점이 파일을 완전히 포함해야 하기 때문에, 오른쪽/아래 좌표에 +1
    answer[2] = bottom + 1;
    answer[3] = right + 1;

    return answer;
}