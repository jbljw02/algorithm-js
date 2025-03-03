// level 2 - 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
    let time = 0; // 경과 시간
    let currentWeight = 0; // 현재 다리 위의 무게

    // 다리 위의 트럭을 저장하는 큐 { weight: 트럭무게, entryTime: 진입시간 }
    const trucksInBridge = [];

    // 대기 중인 트럭들
    const waiting = [...truck_weights];

    // 모든 트럭이 다리를 건널 때까지 반복
    while (trucksInBridge.length > 0 || waiting.length > 0) {
        time++;

        // 다리를 빠져나갈 트럭 확인: 현재 시간 - 진입 시간 >= 다리 길이
        // 진입 시간이 다리 길이와 동일해지는 순간 다리를 건넌 것으로 간주
        if (trucksInBridge.length > 0 &&
            time - trucksInBridge[0].entryTime >= bridge_length) {
            const outTruck = trucksInBridge.shift();
            currentWeight -= outTruck.weight;
        }

        // 새 트럭이 다리에 진입할 수 있는지 확인: 현재 다리 위의 무게 + 대기 중인 트럭의 무게 <= 다리의 최대 하중
        if (waiting.length > 0 &&
            currentWeight + waiting[0] <= weight) {
            const inTruck = waiting.shift();
            trucksInBridge.push({ weight: inTruck, entryTime: time });
            currentWeight += inTruck;
        }
    }

    return time;
}