function solution(sequence) {
  let bestA = -Infinity, curA = 0;
  let bestB = -Infinity, curB = 0;

  for (let i = 0; i < sequence.length; i++) {
    const sign = (i % 2 === 0) ? 1 : -1;

    const xA = sequence[i] * sign;   // + - + - ...
    const xB = sequence[i] * -sign;  // - + - + ...

    // Kadane for A
    curA = Math.max(xA, curA + xA);
    bestA = Math.max(bestA, curA);

    // Kadane for B
    curB = Math.max(xB, curB + xB);
    bestB = Math.max(bestB, curB);
  }

  return Math.max(bestA, bestB);
}
