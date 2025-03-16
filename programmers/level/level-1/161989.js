// level 1 - 덧칠하기(탐욕법)
function solution(n, m, section) {
    let count = 0;
    let lastPainted = 0; // 마지막으로 색칠된 영역

    section.forEach((item, _) => {
        // 색칠된 마지막 벽이 현재 영역보다 작을 경우 색칠
        // 마지막으로 색칠된 벽이 현재 영역보다 클 경우, 현재 영역은 이미 칠해졌으므로 색칠할 필요 X
        if (lastPainted < item) {
            lastPainted = item + m - 1; // 벽은 1부터 시작하므로 -1
            count++;
        }
    })
    return count;
}