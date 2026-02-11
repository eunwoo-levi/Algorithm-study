function solution(expression) {
  let max = 0;

  // 1️⃣ 숫자 / 연산자 파싱
  const numbers = [];
  const operators = [];

  let num = "";
  for (let ch of expression) {
    if (ch === '+' || ch === '-' || ch === '*') {
      numbers.push(Number(num));
      operators.push(ch);
      num = "";
    } else {
      num += ch;
    }
  }
  numbers.push(Number(num));

  const opTypes = [...new Set(operators)];

  // 2️⃣ 순열 생성
  function perm(arr, selected = []) {
    if (selected.length === arr.length) return [selected];

    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!selected.includes(arr[i])) {
        result.push(...perm(arr, [...selected, arr[i]]));
      }
    }
    return result;
  }

  const priorities = perm(opTypes);

  // 3️⃣ 우선순위별 계산
  for (let priority of priorities) {
    let nums = [...numbers];
    let ops = [...operators];

    for (let op of priority) {
      for (let i = 0; i < ops.length; i++) {
        if (ops[i] === op) {
          const result = calc(nums[i], nums[i + 1], op);
          nums.splice(i, 2, result);
          ops.splice(i, 1);
          i--;
        }
      }
    }

    max = Math.max(max, Math.abs(nums[0]));
  }

  return max;
}

function calc(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
}
