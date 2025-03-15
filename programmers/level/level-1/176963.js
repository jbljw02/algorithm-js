// level 1 - 추억 점수(해시)
function solution(name, yearning, photo) {
    // 이름과 점수를 매핑하는 객체 생성
    const map = {};
    name.forEach((name, index) => {
        map[name] = yearning[index];
    })

    // 각 사진에 대한 점수 계산
    const answer = photo.map(currentArr =>
        // 2차원 배열에서 현재 배열에 있는 이름들의 점수 누계 계산
        currentArr.reduce((sum, name) => sum + (map[name] || 0), 0)
    )

    return answer;
}