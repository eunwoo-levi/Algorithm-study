function solution(users, emoticons) {
  let maxService = 0;   // 최대 가입자 수
  let maxRevenue = 0;   // 최대 매출

  function dfs(index, discounts) {
    // 모든 이모티콘의 할인율을 정한 경우
    if (index === emoticons.length) {
      let service = 0;
      let revenue = 0;

      // 각 사용자에 대해 계산
      for (const [userDiscount, userLimit] of users) {
        let userPurchase = 0;

        for (let i = 0; i < emoticons.length; i++) {
          if (discounts[i] >= userDiscount) {
            userPurchase += emoticons[i] * (100 - discounts[i]) / 100;
          }
        }

        // 가입 여부 판단
        if (userPurchase >= userLimit) {
          service++;
        } else {
          revenue += userPurchase;
        }
      }

      // 최적값 갱신
      if (
        maxService < service ||
        (maxService === service && maxRevenue < revenue)
      ) {
        maxService = service;
        maxRevenue = revenue;
      }

      return;
    }

    // 현재 이모티콘의 할인율을 4가지 중 하나로 설정
    for (const discount of [10, 20, 30, 40]) {
      discounts[index] = discount;
      dfs(index + 1, discounts);
    }
  }

  // 할인율 배열 초기화
  const initialDiscount = Array.from(
    { length: emoticons.length },
    () => 0
  );

  dfs(0, initialDiscount);

  return [maxService, Math.floor(maxRevenue)];
}
