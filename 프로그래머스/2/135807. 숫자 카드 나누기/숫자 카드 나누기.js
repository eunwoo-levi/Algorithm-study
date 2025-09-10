function solution(arrayA, arrayB) {
  const gcd = (a, b) => {
    while (b !== 0) {
      const t = a % b;
      a = b;
      b = t;
    }
    return Math.abs(a);
  };

  const gcdOfArray = (arr) => arr.reduce((g, x) => gcd(g, x));

  const dividesNone = (d, arr) => arr.every((x) => x % d !== 0);

  const gA = gcdOfArray(arrayA);
  const gB = gcdOfArray(arrayB);

  const candA = dividesNone(gA, arrayB) ? gA : 0;
  const candB = dividesNone(gB, arrayA) ? gB : 0;

  return Math.max(candA, candB);
}
