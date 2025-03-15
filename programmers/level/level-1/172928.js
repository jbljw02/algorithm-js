// level 1 - 공원 산책(구현)
function solution(park, routes) {
    let currentLoc = []; // 현재 위치 [y, x]
    const [height, width] = [park.length, park[0].length]; // 공원의 너비와 높이
    
    // 시작 위치 찾기
    for (let i = 0; i < park.length; i++) {
        const curArr = park[i].split('');
        const SLoc = curArr.indexOf('S');
        if (SLoc !== -1) {
            currentLoc[0] = i;
            currentLoc[1] = SLoc;
        }
    }

    routes.forEach(route => {
        const [op, n] = [route[0], Number(route[2])]; // [방향, 이동 거리]
        let [tempY, tempX] = [currentLoc[0], currentLoc[1]];
        let canMove = true;

        for (let i = 0; i < n; i++) {
            if (op === 'E') tempX++;
            if (op === 'W') tempX--;
            if (op === 'N') tempY--;
            if (op === 'S') tempY++;

            // 공원을 벗어나거나 장애물을 만나면 위치 업데이트 X
            if (tempX < 0 || tempX >= width ||
                tempY < 0 || tempY >= height ||
                park[tempY][tempX] === 'X') {
                canMove = false;
                break;
            }
        }

        if (canMove) {
            currentLoc[0] = tempY;
            currentLoc[1] = tempX;
        }
    });

    return currentLoc
}