function solution(participant, completion) {
    const map = new Map(); // key - value 쌍을 가지는 Map 객체 생성

    for (let i = 0; i < participant.length; i++) {
        let a = participant[i],
            b = completion[i];

        // 참여자에 존재하는 선수의 value 값을 +1
        // 완주자에 존재하는 선수의 value 값은 -1
        // 즉, 완주한 선수의 value는 0이고 참여만 한 선수의 value는 1로 유지
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for (let [key, value] of map) {
        // 완주한 선수는 value가 1이므로 만난다면 즉시 리턴
        if (value > 0) return key;
    }

    return null;
}
