// level 2 - 기능개발
function solution(progresses, speeds) {
    let answer = [];

    // 각 작업이 완료되기까지의 소요 일수를 담은 배열
    let days = progresses.map((el, index) => Math.ceil((100 - el) / speeds[index]));

    let currentMaxDay = days[0]; // 기준 배포일(큐에 대한 문제이므로, 첫 작업이 완료되는 일수가 초기값)
    let count = 0; // 기준 배포일 안에 같이 완료되는 작업 수

    for (let i = 0; i < days.length; i++) {
        // 기준 배포일 안에 완료되는 작업일 경우 카운트 증가
        if (days[i] <= currentMaxDay) {
            count++;
        } 
        // 기준 배포일을 넘어서는 작업일 경우
        else {
            answer.push(count); // 이전 배포 주기는 끝났으므로 완료된 작업 수 배열에 추가
            currentMaxDay = days[i]; // 기준 배포일을 현재 작업의 소요 일수로 갱신
            count = 1; // 카운트 초기화
        }
    }
    answer.push(count);

    return answer;
}