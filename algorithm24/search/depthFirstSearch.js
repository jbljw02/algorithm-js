// 깊이 우선 탐색 - DFS
// Set을 사용해서 방문 노드의 값이 중복되지 않도록 함
const dfs = (graph, start, visited = new Set()) => {
    visited.add(start); // 방문한 노드를 추가
    console.log(start);

    // graph[start]의 value가 만약 비어있다면, 현재 호출을 종료하고 이전 호출로 돌아감
    for(let adjacent of graph[start]) {
        // 인접 노드들을 방문한 적 없다면, 해당 노드로 이동해서 다시 재귀 호출
        if(!visited.has(adjacent)) {
            dfs(graph, adjacent, visited);
        }
    }

    // 인접 노드가 더 이상 없다면, 함수는 종료되고 콜 스택에서 해당 함수가 제거됨.
    // 이후 콜 스택에 남아있던 마지막 함수(이전 함수)가 다시 실행을 이어받음.
    // 함수의 호출이 끝나면, 그 함수를 호출했던 이전 함수 호출로 되돌아가는 재귀 함수의 원리.
}

//  1
// / \
// 2  3
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