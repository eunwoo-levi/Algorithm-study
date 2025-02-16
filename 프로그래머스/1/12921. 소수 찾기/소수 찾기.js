function solution(n) {
  const sieve = [];

  for (let i = 2; i <= n; i++) {
    sieve[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (sieve[j] === 0) continue;
    for (let k = j + j; k <= n; k += j) {
      sieve[k] = 0;
    }
  }

  return sieve.filter((el) => el).length;
}