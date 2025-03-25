// level 1 - 둘만의 암호(구현)
function solution(s, skip, index) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const skipSet = new Set(skip);

    const answer = s.split('').map(char => {
        let currentPos = alphabet.indexOf(char);
        let moveCount = 0;

        // index만큼 반복하면서 알파벳 이동
        while (moveCount < index) {
            // 다음 알파벳으로 이동
            // 알파벳을 z까지 전부 순회하면 a로 돌아와야 하기 때문에 26으로 나눈 나머지를 구함
            currentPos = (currentPos + 1) % alphabet.length;

            // skip에 없는 문자일 때만 이동 횟수 증가
            if (!skipSet.has(alphabet[currentPos])) {
                moveCount++;
            }
        }

        return alphabet[currentPos];
    }).join('');

    return answer;
}