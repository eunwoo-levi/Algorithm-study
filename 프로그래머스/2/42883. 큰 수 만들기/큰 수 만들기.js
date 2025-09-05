function solution(number, k) {
  const stack = [];
  let remove = k;

  for (const ch of number) {
    while (remove > 0 && stack.length && stack[stack.length - 1] < ch) {
      stack.pop();
      remove--;
    }
    stack.push(ch);
  }

  // 아직 못 뺀 게 남았으면 뒤에서 제거 (감소 수열 같은 케이스)
  if (remove > 0) stack.length = stack.length - remove;

  return stack.join('');
}
