function solution(n, wires) {
    let minDiff = Infinity;

    const buildGraph = (skipIdx) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        wires.forEach(([a, b], idx) => {
            if (idx === skipIdx) return; // 간선 하나 끊기
            graph[a].push(b);
            graph[b].push(a);
        });
        return graph;
    };

    const countNodes = (start, graph, visited) => {
        let count = 0;
        const queue = [start];
        visited[start] = true;

        while (queue.length) {
            const node = queue.shift();
            count++;

            graph[node].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return count;
    };

    for (let i = 0; i < wires.length; i++) {
        const graph = buildGraph(i);
        const visited = Array(n + 1).fill(false);
        const count = countNodes(1, graph, visited); // 한 쪽 트리의 노드 수
        const diff = Math.abs(n - 2 * count); // 두 쪽의 노드 수 차이
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}
