function solution(n) {
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    let num = 1;
    let x = -1, y = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) {
                // 아래로
                x++;
            } else if (i % 3 === 1) {
                // 오른쪽으로
                y++;
            } else if (i % 3 === 2) {
                // 대각선 위로
                x--;
                y--;
            }
            triangle[x][y] = num++;
        }
    }

    // 2차원 배열을 한 줄로 펼쳐서 반환
    return triangle.flat();
}
