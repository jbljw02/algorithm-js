// level 2 - 올바른 괄호
function solution(s) {
    const arr = s.split('');

    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        // '('는 스택에 추가
        if (arr[i] === '(') {
            stack.push(arr[i]);
        }
        // ')'가 등장했을 때, 괄호쌍이 일치시키기 위해 '('를 스택에서 제거
        else {
            // 스택이 비어있으면 괄호쌍이 일치하지 않으므로 false 반환
            if (!stack.length) return false;
            stack.pop();
        }
    }

    // 최종적으로 스택이 모든 괄호쌍이 제거되면 스택의 길이는 0이 됨
    if (!stack.length) return true;
    else return false;
}