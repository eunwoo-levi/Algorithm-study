function solution(relation) {
  const row = relation.length;
  const col = relation[0].length;
  const candidateKeys = [];

  // 비트마스크 사용
  for (let bit = 1; bit < (1 << col); bit++) {

    // 1️⃣ 최소성 검사
    let isMinimal = true;
    for (const key of candidateKeys) {
      if ((key & bit) === key) {
        isMinimal = false;
        break;
      }
    }
    if (!isMinimal) continue;

    // 2️⃣ 유일성 검사
    const set = new Set();
    for (let i = 0; i < row; i++) {
      let str = '';
      for (let j = 0; j < col; j++) {
        if (bit & (1 << j)) {
          str += relation[i][j] + '|';
        }
      }
      set.add(str);
    }

    if (set.size === row) {
      candidateKeys.push(bit);
    }
  }

  return candidateKeys.length;
}
