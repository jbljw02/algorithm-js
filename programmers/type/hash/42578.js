// level 2 - 의상
function solution(clothes) {
    const clothesMap = {};

    for (const [name, type] of clothes) {
        // 의상 종류가 이미 있는 경우
        if (clothesMap[type]) {
            clothesMap[type]++;
        } 
        // 의상 종류가 없는 경우 카운트 1
        else {
            clothesMap[type] = 1;
        }
    }

    // 조합 수 계산
    let answer = 1; // 초기값 1
    for (const count of Object.values(clothesMap)) {
        answer *= (count + 1); // 각 의상의 개수 + 1(착용하지 않는 경우)
    }

    return answer - 1; // 아무것도 착용하지 않는 경우
}