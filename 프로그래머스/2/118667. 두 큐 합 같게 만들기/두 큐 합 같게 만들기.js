// Slider
function solution(queue1, queue2) {
  const n = queue1.length;
  const queue = queue1.concat(queue2);

  const total = queue.reduce((acc, num) => acc + num, 0);
  if (total % 2 !== 0) return -1;          // 전체 합이 홀수면 불가
  const target = total / 2;

  let start = 0;
  let end = n;                              // 윈도우 [start, end) : 현재 queue1 영역
  let sum = queue1.reduce((acc, num) => acc + num, 0);
  let res = 0;

  const LIMIT = n * 3;                      // 충분한 상한

  while (res <= LIMIT) {
    if (sum === target) return res;

    if (sum > target) {
      // 왼쪽에서 하나 빼기 (queue1 -> queue2)
      sum -= queue[start++];
    } else {
      // 오른쪽에서 하나 받기 (queue2 -> queue1)
      if (end >= queue.length) return -1;   // 더 가져올 게 없으면 불가
      sum += queue[end++];
    }
    res++;
  }

  return -1;
}
