function solution(files) {
  const isDigit = (ch) => ch >= '0' && ch <= '9';

  function parse(file) {
    const n = file.length;
    let i = 0;

    // 1) HEAD: 숫자가 나오기 전까지
    while (i < n && !isDigit(file[i])) i++;
    const head = file.slice(0, i);

    // 2) NUMBER: 최대 5자리 연속 숫자
    let j = i;
    let count = 0;
    while (j < n && isDigit(file[j]) && count < 5) {
      j++; count++;
    }
    const numberStr = file.slice(i, j);
    const number = parseInt(numberStr, 10);

    // 3) TAIL: j부터 끝까지 (정렬엔 사용 X)
    // const tail = file.slice(j);

    return { head, number, /*tail,*/ original: file };
  }

  const parsed = files.map((f, idx) => {
    const p = parse(f);
    return {
      ...p,
      headLower: p.head.toLowerCase(),
      idx,
    };
  });

  parsed.sort((a, b) => {
    if (a.headLower < b.headLower) return -1;
    if (a.headLower > b.headLower) return 1;
    if (a.number !== b.number) return a.number - b.number;
    return a.idx - b.idx;
  });

  return parsed.map(p => p.original);
}
