// level 1 - 카드 뭉치(투 포인터)
function solution(cards1, cards2, goal) {
    // 두 카드 뭉치의 비교가 어디까지 진행됐는지 확인할 인덱스
    let index1 = 0;
    let index2 = 0;

    for (let word of goal) {
        // 카드 뭉치의 해당 위치 단어와 목표 단어가 같을 시, 해당 카드 사용(제거)
        // shift()는 간단하지만, for문과 중첩돼서 시간 복잡도 증가 - O(n*m)
        if (cards1[index1] === word) {
            index1++;
        }
        else if (cards2[index2] === word) {
            index2++;
        }
        else {
            return "No";
        }
    }
    return "Yes";
}