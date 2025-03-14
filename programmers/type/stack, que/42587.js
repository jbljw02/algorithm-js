// level 2 - 프로세스
function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, index) => ({ priority, index }));
    
    while (queue.length > 0) {
        // 큐의 첫 번째 프로세스를 꺼냄
        const current = queue.shift();
        
        // 현재 프로세스보다 우선순위가 높은 프로세스가 존재하는지 검사
        if (queue.some(item => item.priority > current.priority)) {
            // 우선순위가 높은 요소가 있다면, 현재 요소를 큐의 맨 뒤로 다시 삽입
            // 큐의 데이터 삽입은 항상 '뒤쪽'에서 이루어짐
            queue.push(current);
        } 
        // 현재 프로세스보다 우선순위가 높은 프로세스가 없다면, 실행할 프로세스가 결정되었다는 의미
        else {
            answer++; // 프로세스가 실행됐으므로 카운트 증가

            // 만약 현재 실행하는 프로세스의 위치가 location과 같다면 정답을 찾은 것
            if (current.index === location) {
                return answer;
            }
        }
    }
    
    return answer;
}