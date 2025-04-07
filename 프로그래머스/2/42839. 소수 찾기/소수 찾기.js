function solution(numbers) {
    const numSet = new Set();
    const visited = Array(numbers.length).fill(false);

    const dfs = (path) => {
        if (path.length > 0) {
            numSet.add(Number(path));
        }
        if (path.length === numbers.length) return;

        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(path + numbers[i]);
                visited[i] = false;
            }
        }
    };

    dfs('');
    
    return [...numSet].filter(isPrime).length;
}

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};
