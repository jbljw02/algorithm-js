// level 1 - 폰켓몬
function solution(nums) {
    const arr = [...new Set(nums)]; // 중복 제거
    const max = nums.length / 2; // 선택 가능한 수: 개수에 2를 나눈 값
    return arr.length > max ? max : arr.length; // 중복 제거한 값이 최댓값보다 클 시에는 최댓값 리턴
}