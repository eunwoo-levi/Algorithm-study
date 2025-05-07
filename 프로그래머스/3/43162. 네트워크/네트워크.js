function solution(n, computers) {
    let networks = 0;
    const visited = new Array(n).fill(false);

    function dfs(index) {
        visited[index] = true;

        for (let i = 0; i < computers[index].length; i++) {
            if (!visited[i] && computers[index][i] === 1) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networks++;
            dfs(i);
        }
    }

    return networks;
}