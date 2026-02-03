function solution(dice) {
  const n = dice.length;
  const half = n / 2;
  let maxWin = -1;
  let answer = [];

  // 합 경우의 수 캐싱: bitmask -> sums[]
  const sumCache = new Map();

  // 주사위 조합 DFS
  function dfs(start, picked) {
    if (picked.length === half) {
      const A = picked;
      const B = [];
      for (let i = 0; i < n; i++) {
        if (!picked.includes(i)) B.push(i);
      }

      const sumA = getSums(A);
      const sumB = getSums(B);

      sumA.sort((a, b) => a - b);
      sumB.sort((a, b) => a - b);

      let win = 0;
      for (const a of sumA) {
        win += lowerBound(sumB, a);
      }

      if (win > maxWin) {
        maxWin = win;
        answer = A.map(i => i + 1); // 문제는 1-based index
      }
      return;
    }

    for (let i = start; i < n; i++) {
      picked.push(i);
      dfs(i + 1, picked);
      picked.pop();
    }
  }

  // 특정 주사위 조합의 합 경우의 수
  function getSums(indices) {
    const mask = indices.reduce((m, i) => m | (1 << i), 0);
    if (sumCache.has(mask)) return sumCache.get(mask);

    const res = [];
    function dfsSum(idx, sum) {
      if (idx === indices.length) {
        res.push(sum);
        return;
      }
      for (const face of dice[indices[idx]]) {
        dfsSum(idx + 1, sum + face);
      }
    }

    dfsSum(0, 0);
    sumCache.set(mask, res);
    return res;
  }

  // lowerBound: target보다 작은 원소 개수
  function lowerBound(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
      const mid = (l + r) >> 1;
      if (arr[mid] < target) l = mid + 1;
      else r = mid;
    }
    return l;
  }

  dfs(0, []);
  return answer;
}
