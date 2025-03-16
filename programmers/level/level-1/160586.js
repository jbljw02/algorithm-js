// level 1 - 대충 만든 자판(해시)
function solution(keymap, targets) {
    const map = {};
    const answer = [];

    keymap.forEach(currentKey => {
        currentKey.split('').forEach((key, j) => {
            // 해당 문자열이 키보드에 있을 경우, 이미 할당된 값과 현재 값중에 최소 탐색 횟수를 할당
            if (map[key]) {
                map[key] = Math.min(map[key], j + 1)
            }
            // 해당 문자열이 키보드에 없을 경우, 현재 값을 할당
            else {
                map[key] = j + 1;
            }
        })
    })

    targets.forEach(currentTarget => {
        let count = 0;
        for (let target of currentTarget) {
            // 해당 문자열이 키보드에 없을 경우 -1을 할당하고 반복 중지(현재 문자열에 대한 탐색 중지)
            if (!map[target]) {
                count = -1;
                break; // forEach 내부에선 break 불가능
            }
            count += map[target];
        }
        answer.push(count);
    })
    
    return answer;
}