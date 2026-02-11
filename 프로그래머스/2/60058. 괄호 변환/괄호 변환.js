// 균형 잡힌 문자열: ')' 와 '(' 갯수가 같다.
// 올바른 괄호 문자열:  균형 잡힌 문자열 + 괄호 대칭 만족

function solution(w) {
  if (w === "") return ""; // w가 빈 문자열이면 빈 문자열을 반환한다.
  let u, v;
  let cnt = 0;

  const wLen = w.length;
  for (let i = 0; i < wLen; i++) {
    w[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  } // w에서 균형잡힌 문자열까지 문자열 u로 선언하고, 나머지를 v로 선언한다.

  const uLen = u.length;
  for (let i = 0; i < uLen; i++) {
    u[i] === "(" ? cnt++ : cnt--;
    if (cnt < 0) { // cnt < 0 이면 올바른 문자열이 아니므로 3-2를 수행한다.
      let str = "";
      str += `(${solution(v)})`;
      for (let j = 1; j < uLen - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
      }
      return str;
    }
  }

  return u + solution(v); // 이 3-1의 리턴이 수행되려면 u가 올바른 문자열이어야 한다.
}