function solution(arr) {
    const answer = [0, 0]; // [0의 개수, 1의 개수]

    const compress = (x, y, size) => {
        const first = arr[x][y];
        let same = true;

        // 현재 영역이 전부 같은 숫자인지 확인
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== first) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }

        if (same) {
            answer[first]++;
        } else {
            const half = size / 2;
            compress(x, y, half);                     // 왼쪽 위
            compress(x, y + half, half);              // 오른쪽 위
            compress(x + half, y, half);              // 왼쪽 아래
            compress(x + half, y + half, half);       // 오른쪽 아래
        }
    };

    compress(0, 0, arr.length);
    return answer;
}