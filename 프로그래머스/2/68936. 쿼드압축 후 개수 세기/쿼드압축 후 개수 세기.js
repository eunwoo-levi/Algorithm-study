function solution(arr) {
  const res = [0, 0];

  const compress = (y, x, size) => {
    const first = arr[y][x];        // <-- 올바른 2차원 인덱싱
    let same = true;

    // 현재 사각형 [y..y+size), [x..x+size) 범위만 검사
    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        if (arr[i][j] !== first) {  // <-- 올바른 2차원 인덱싱
          same = false;
          break;
        }
      }
      if (!same) break;
    }

    if (same) {
      res[first]++;
      return;
    }

    const half = size >> 1;         // size는 2의 거듭제곱이라 비트연산으로 반 나눠도 OK
    compress(y, x, half);
    compress(y, x + half, half);
    compress(y + half, x, half);
    compress(y + half, x + half, half);
  };

  compress(0, 0, arr.length);
  return res;
}
