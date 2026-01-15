function solution(elements) {
  const CQ = elements.concat(elements);
  const set = new Set();

  for (let n = 1; n <= elements.length; n++) {
    for (let i = 0; i < elements.length; i++) {
      const sum = CQ.slice(i, i + n).reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }

  return set.size;
}
