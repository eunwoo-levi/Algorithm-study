function solution(numbers, hand) {
  let answer = [];
  let leftHand = "*";
  let rightHand = "#";

  const KEYPAD = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const LEFT_PAD = [1, 4, 7];
  const RIGHT_PAD = [3, 6, 9];

  const getDistance = (cur, tar) => {
    const currentPosition = KEYPAD[cur];
    const targetPosition = KEYPAD[tar];

    return (
      Math.abs(currentPosition[0] - targetPosition[0]) +
      Math.abs(currentPosition[1] - targetPosition[1])
    );
  };

  numbers.forEach((number) => {
    if (LEFT_PAD.includes(number)) {
      answer.push("L");
      leftHand = number;
      return;
    }
    if (RIGHT_PAD.includes(number)) {
      answer.push("R");
      rightHand = number;
      return;
    }

    const distanceToLeft = getDistance(leftHand, number);
    const distanceToRight = getDistance(rightHand, number);

    if (distanceToLeft === distanceToRight) {
      if (hand === "right") {
        answer.push("R");
        rightHand = number;
        return;
      }

      if (hand === "left") {
        answer.push("L");
        leftHand = number;
        return;
      }
    }

    if (distanceToLeft > distanceToRight) {
      answer.push("R");
      rightHand = number;
      return;
    }

    if (distanceToLeft < distanceToRight) {
      answer.push("L");
      leftHand = number;
      return;
    }
  });

  return answer.join("");
}