// level 2 - 소수 찾기
function solution(numbers) {
    // 모든 숫자 조합을 저장할 Set
    const numberSet = new Set();

    // 숫자 조합을 만드는 재귀 함수
    function makeNumbers(current, remains) {
        // 현재 조합을 숫자로 변환하여 저장
        if (current.length > 0) {
            numberSet.add(Number(current));
        }

        // 남은 숫자들로 새로운 조합 만들기
        for (let i = 0; i < remains.length; i++) {
            makeNumbers(
                current + remains[i],
                remains.slice(0, i) + remains.slice(i + 1)
            );
        }
    }

    // 소수 판별 함수
    function isPrime(num) {
        if (num <= 1) return false; // 1 이하는 소수가 아님
        if (num === 2) return true; // 2는 소수
        if (num % 2 === 0) return false; // 짝수는 소수가 아님

        // 제곱근까지만 확인하면 소수인지 판별 가능
        const sqrt = Math.sqrt(num);
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 모든 가능한 숫자 조합 생성
    makeNumbers("", numbers);

    // 소수만 필터링하여 개수 반환
    return [...numberSet].filter(num => isPrime(num)).length;
}