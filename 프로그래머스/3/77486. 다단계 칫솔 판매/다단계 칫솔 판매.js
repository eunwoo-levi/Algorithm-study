function solution(enroll, referral, seller, amount) {
  const map = new Map();

  // 1) 사람별 정보: parent(추천인), profit(누적 수익)
  for (let i = 0; i < enroll.length; i++) {
    map.set(enroll[i], {
      parent: referral[i] === '-' ? null : referral[i],
      profit: 0,
    });
  }

  // 2) 판매 수익 분배
  for (let i = 0; i < seller.length; i++) {
    let cur = seller[i];
    let money = amount[i] * 100; // 문제에서 1개당 100원

    while (cur !== null && money > 0) {
      const passUp = Math.floor(money * 0.1); // 10% (버림)
      const keep = money - passUp;            // 내 몫 90%

      map.get(cur).profit += keep;

      cur = map.get(cur).parent;
      money = passUp;
    }
  }

  // 3) enroll 순서대로 반환
  return enroll.map((name) => map.get(name).profit);
}
