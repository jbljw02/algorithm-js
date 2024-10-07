// 깊이 우선 탐색 - DFS
// Set을 사용해서 방문 노드의 값이 중복되지 않도록 함
const dfs = (graph, start, visited = new Set()) => {
    visited.add(start); // 방문한 노드를 추가
    console.log(start);

    // graph[start]의 value가 만약 비어있다면, 현재 호출을 종료하고 이젠 호출로 돌아감
    for(let adjacent of graph[start]) {
        // 인접 노드들을 방문한 적 없다면, 해당 노드로 이동해서 다시 재귀 호출
        if(!visited.has(adjacent)) {
            dfs(graph, adjacent, visited);
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
    6: [],
};

dfs(graph, 1);