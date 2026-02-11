function solution(numbers, hand) {
  const keypad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    0: [3, 1],
    '*': [3, 0],
    '#': [3, 2],
  };

  let leftPos = keypad['*'];
  let rightPos = keypad['#'];
  let answer = '';

  for (const num of numbers) {
    const [x, y] = keypad[num];

    // 왼쪽 고정
    if ([1, 4, 7].includes(num)) {
      answer += 'L';
      leftPos = [x, y];
      continue;
    }

    // 오른쪽 고정
    if ([3, 6, 9].includes(num)) {
      answer += 'R';
      rightPos = [x, y];
      continue;
    }

    // 가운데 숫자
    const leftDist =
      Math.abs(leftPos[0] - x) + Math.abs(leftPos[1] - y);
    const rightDist =
      Math.abs(rightPos[0] - x) + Math.abs(rightPos[1] - y);

    if (leftDist < rightDist) {
      answer += 'L';
      leftPos = [x, y];
    } else if (leftDist > rightDist) {
      answer += 'R';
      rightPos = [x, y];
    } else {
      if (hand === 'left') {
        answer += 'L';
        leftPos = [x, y];
      } else {
        answer += 'R';
        rightPos = [x, y];
      }
    }
  }

  return answer;
}
