// level 2 - 가장 큰 수
function solution(numbers) {
    // 숫자를 문자열로 변환하여 배열 생성
    // 숫자 형태의 배열을 생성하면, 각 숫자가 연결되지 않고 더해짐('3' + '30' = '330' 이 아니라 330)
    // 또한, `sort`는 자동으로 형변환을 함
    const arr = numbers.map(number => String(number));

    // 내림차순 정렬
    // 따라서 '30'과 '3'을 비교할 때, '303'과 '330'을 비교해서 더 큰 수를 생성
    arr.sort((a, b) => (b + a) - (a + b));

    // 모든 숫자가 0인 경우 "0"을 반환(히든 케이스)
    if (arr[0] === '0') return '0';

    return arr.join('');
}