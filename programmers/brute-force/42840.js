// level 1 - 모의고사
function solution(answers) {
    const answer = [];

    // 세 학생의 찍는 방식
    const students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    const studentsScore = [0, 0, 0]; // 세 학생의 점수

    for (let i = 0; i < students.length; i++) {
        const curStudent = students[i];

        // 각 학생의 점수 계산
        for (let j = 0; j < answers.length; j++) {
            // 정답의 길이가 학생의 답안 배열보다 길 경우, 나눈 값을 기준으로 다시 처음과 비교해야 함
            // ex) 6번째 정답과 학생의 답안을 비교하려면, 다시 1번째 정답과 비교
            if (answers[j] === curStudent[j % curStudent.length]) studentsScore[i] += 1;
        }
    }

    // 최댓값을 찾고, 최댓값을 가진 학생의 인덱스를 전부 배열에 추가
    const maxScore = Math.max(...studentsScore);
    studentsScore.forEach((item, index) => item === maxScore && answer.push(index + 1))

    return answer;
}