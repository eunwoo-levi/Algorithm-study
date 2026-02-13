function solution(relation) {
  const col = relation[0].length;
  const row = relation.length;
  const candidateKeys = [];

  // 길이 1부터 n까지
  for (let size = 1; size <= col; size++) {
    combination(0, [], size);
  }

  function combination(start, path, size) {
    if (path.length === size) {
      check(path);
      return;
    }

    for (let i = start; i < col; i++) {
      combination(i + 1, [...path, i], size);
    }
  }

  function check(cols) {
    // 1️⃣ 최소성 검사
    for (const key of candidateKeys) {
      if (key.every(k => cols.includes(k))) {
        return;
      }
    }

    // 2️⃣ 유일성 검사
    const set = new Set();
    for (let i = 0; i < row; i++) {
      const str = cols.map(col => relation[i][col]).join('|');
      set.add(str);
    }

    if (set.size === row) {
      candidateKeys.push(cols);
    }
  }

  return candidateKeys.length;
}
