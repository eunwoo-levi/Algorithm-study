function solution() {
  const generated = Array(10001).fill(false);

  for (let i = 1; i <= 10000; i++) {
    const n = calculate(i);
    if (n <= 10000) generated[n] = true;
  }

  const result = [];
  for (let i = 1; i <= 10000; i++) {
    if (!generated[i]) result.push(i);
  }
  return result;
}

function calculate(n) {
  let res = n;
  const strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    res += Number(strN[i]);
  }
  return res;
}

console.log(solution().join('\n'));
