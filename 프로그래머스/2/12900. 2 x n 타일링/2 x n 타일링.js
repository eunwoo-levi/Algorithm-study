function solution(n) {
    if (n === 1) return 1;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        let temp = (a + b) % 1000000007;
        a = b;
        b = temp;
    }
    return b;
}