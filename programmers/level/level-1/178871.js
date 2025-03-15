// level 1 - 달리기 경주(해시)
function solution(players, callings) {
    // 선수명과 등수를 매핑하는 객체 생성
    const playerMap = {};
    players.forEach((player, index) => {
        playerMap[player] = index;
    })

    // 불린 선수의 등수를 찾아 앞 선수와 위치 변경
    callings.forEach(callName => {
        const currentIdx = playerMap[callName]; // 불린 선수의 '등수'
        const frontPlayer = players[currentIdx - 1]; // 앞 선수의 '이름'

        // 앞 선수와 불린 선수의 위치 변경
        players[currentIdx - 1] = callName;
        players[currentIdx] = frontPlayer;

        // 등수 업데이트
        playerMap[callName] = currentIdx - 1;
        playerMap[frontPlayer] = currentIdx;
    })

    return players;
}