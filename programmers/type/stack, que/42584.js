// level 2 - 주식 가격
function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        // 스택에 존재하는 가격들 중 현재 가격보다 큰 값을 찾음(가격이 떨어졌는지 확인)
        // ex) [0, 3, 3, 1]일 때 1과 근접한 두번째 3을 스택에서 pop, 그 뒤엔 [0, 3, 1]이 남으니 whlie문은 종료되지 않고 3을 다시 pop
        while (stack.length > 0 && stack[stack.length - 1][0] > prices[i]) {
            const [_, prevIndex] = stack.pop();
            answer[prevIndex] = i - prevIndex; // index를 통해 가격이 떨어지지 않고 유지된 기간 계산
        }
        stack.push([prices[i], i]); // 가격이 떨어지지 않은 요소를 스택에 추가
    }

    // 스택에 남아있는 값(가격이 떨어진 적 없는 값)의 기간 계산   
    while (stack.length > 0) {
        const [_, index] = stack.pop();
        // 가격이 유지된 기간 = 배열의 크기 - 1 - 해당 요소의 index
        answer[index] = prices.length - 1 - index;
    }

    return answer;
}