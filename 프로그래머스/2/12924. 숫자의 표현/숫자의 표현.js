function solution(n) {
  let count = 0;
  let l = 1;
  let r = 1;
  let sum = 1;

  while (l <= n) {
    if (sum === n) {
      count++;
      sum -= l;
      l++;
    } else if (sum < n) {
      r++;
      sum += r;
    } else { // sum > n
      sum -= l;
      l++;
    }
  }

  return count;
}
