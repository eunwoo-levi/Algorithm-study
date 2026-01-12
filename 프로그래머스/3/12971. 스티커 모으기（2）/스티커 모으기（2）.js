const solution = (sticker) => {
  const length = sticker.length;
  if (length === 1) return sticker[0];
  if (length === 2) return Math.max(sticker[0], sticker[1]);

  const dp1 = Array(length).fill(0); // 0번 포함 -> 마지막 제외
  const dp2 = Array(length).fill(0); // 0번 제외 -> 마지막 포함 가능

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];

  dp2[0] = 0;
  dp2[1] = sticker[1];

  for (let i = 2; i < length; i++) {
    // dp1: 마지막은 강제로 선택 불가
    if (i !== length - 1) {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    } else {
      dp1[i] = dp1[i - 1];
    }

    // dp2: 일반 인접 금지 DP (1..n-1)
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[length - 1], dp2[length - 1]);
};
