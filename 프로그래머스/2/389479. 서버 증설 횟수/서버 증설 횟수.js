// 그리디 + 시뮬레이션 
function solution(players, m, k) {
  const n = players.length;
  const off = Array(n + k + 1).fill(0); // t 시각에 만료될 서버 수
  let active = 0;     // 현재 가동 중(증설 서버 수)
  let addCount = 0;   // 총 증설 대수

  for (let t = 0; t < n; t++) {
    active -= off[t]; // 먼저 만료 반영

    // ✅ 핵심 수정: floor 사용
    const need = Math.floor(players[t] / m);

    if (active < need) {
      const add = need - active;
      addCount += add;
      active += add;
      off[t + k] += add; // k시간 뒤 만료
    }
  }
  return addCount;
}
