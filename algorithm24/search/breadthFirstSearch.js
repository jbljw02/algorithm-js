// 너비 우선 탐색 - BFS
const bfs = (graph, start) => {
    const visited = new Set(); // 방문한 노드를 추적하기 위한 Set
    const queue = [start]; // 큐는 노드를 순서대로 관리해야 하기 때문에, start를 배열로 생성

    while (queue.length > 0) {
        const node = queue.shift(); // 큐의 가장 앞에 있는 노드를 꺼냄

        if (!visited.has(node)) {
            // 노드를 아직 방문하지 않았다면 Set에 추가
            console.log(node);
            visited.add(node);

            // 현재 노드와 연결된 노드들을 큐에 추가
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
            // 큐에 추가된 노드들로 작업을 이어나감
        }
    }
}

//  1
// / \
// 2   3
// |\    
// 4 5   
//    \
//     6
const graph = {
    1: [2, 3],
    2: [4, 5],
    3: [],
    4: [],
    5: [6],
    6: []
};

bfs(graph, 1);