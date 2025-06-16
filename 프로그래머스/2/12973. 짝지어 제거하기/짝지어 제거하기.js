function solution(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 짝지어 제거
    } else {
      stack.push(char); // 스택에 추가
    }
  }

  return stack.length === 0 ? 1 : 0;
}
