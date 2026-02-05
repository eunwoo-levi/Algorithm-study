function solution(tickets) {
    const graph = {};
    
    // 1. 그래프 구성
    for (const [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    
    // 2. 사전순 정렬
    for (const key in graph) {
        graph[key].sort();
    }
    
    const route = [];
    
    // 3. DFS (Hierholzer)
    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            const next = graph[airport].shift(); // 사전순
            dfs(next);
        }
        route.push(airport);
    }
    
    dfs("ICN");
    
    // 4. 역순이 정답
    return route.reverse();
}
