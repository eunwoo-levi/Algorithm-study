function solution(queue1, queue2) {
  const queue = queue1.concat(queue2);
  const len = queue.length;
  const targetSum = queue.reduce((acc, cur) => acc + cur, 0) / 2;

  let start = 0;
  let end = queue1.length;
  let sum = queue.slice(start, end).reduce((acc, cur) => acc + cur, 0);

  let count = 0;

  while (start < end) {
    if (sum === targetSum) {
      return count;
    } else if (sum < targetSum) {
      sum += queue[end];
      end = (end + 1) % len;
    } else if (sum > targetSum) {
      sum -= queue[start];
      start = (start + 1) % len;
    }
    count++;
  }
  return -1;
}