// 위상 정렬 - DFS를 이용
const topologicalSort = (graph) => {
    const visited = new Set(); // 방문할 노드를 추적
    const stack = []; // 노드들을 저장할 스택

    const dfs = (node) => {
        visited.add(node); // 노드를 방문 처리

        for (let adjacent of graph[node]) {
            if (!visited.has(adjacent)) {
                dfs(adjacent);
            }
        }

        // 모든 인접 노드를 방문한 후, 현재 노드를 스택에 추가
        stack.push(node);
    }

    // 그래프의 모든 노드를 탐색
    for (let node in graph) {
        // 아직 방문하지 않은 노드라면 dfs에 인자로 전달
        if (!visited.has(Number(node))) {
            dfs(Number(node));
        }
    }

    // 스택의 역순으로 위상 정렬 순서 출력
    return stack.reverse();
}

//  1
// / \
// 2  3
// |\    
// 4 5   
//    \
//     6
const graph = {
    1: [2],        // 수학 기초 -> 수학 고급
    2: [3, 4],     // 수학 고급 -> 알고리즘, 자료구조
    3: [5],        // 알고리즘 -> 인공지능 기초
    4: [],         // 자료구조 -> (종료)
    5: [], 
};

const sortedOrder = topologicalSort(graph);