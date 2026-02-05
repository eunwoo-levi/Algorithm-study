function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1️⃣ 좌표 2배 확장
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    const doubleRect = rectangle.map(r => r.map(v => v * 2));

    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];

    // 3️⃣ 맵 초기화
    const SIZE = 103;
    const map = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

    // 4️⃣ 사각형 그리기
    // 0: 이동 불가 / 방문 완료
    // 1: 테두리 (이동 가능)
    // 2: 내부 (이동 불가)
    doubleRect.forEach(([x1, y1, x2, y2]) => {
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                if (x === x1 || x === x2 || y === y1 || y === y2) {
                    if (map[y][x] === 0) map[y][x] = 1;
                } else {
                    map[y][x] = 2;
                }
            }
        }
    });

    // 5️⃣ BFS 준비
    const queue = [[characterY, characterX, 0]];
    let head = 0;
    map[characterY][characterX] = 0; // 방문 처리

    // 6️⃣ BFS
    while (head < queue.length) {
        const [y, x, cnt] = queue[head++];

        if (x === itemX && y === itemY) {
            return cnt / 2;
        }

        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (map[ny][nx] === 1) {
                map[ny][nx] = 0; // 방문 처리
                queue.push([ny, nx, cnt + 1]);
            }
        }
    }

    return 0;
}

// 2배를 하는 이유
// □
//   □      이렇게 직사각형이 2개있다고 가정.   아래는 이를 좌표로 나타낸 것
// (1,1) ┐
//       └ (2,2)
// 모서리만 닿음
// 👉 실제로는 이동 불가능
// ❌ 그런데 원래 좌표계에선?   BFS 기준으로 보면
// (1,1) → (2,2)
// 👉 대각선은 못 가지만  ,   👉 테두리 판정 로직상 길이 이어진 것처럼 처리되는 경우 발생
// 즉  ->   "통과하면 안 되는 길"이 열려버림