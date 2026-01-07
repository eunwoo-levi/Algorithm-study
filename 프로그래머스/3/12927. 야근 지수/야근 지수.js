function solution(n, works) {
  // 남은 총 작업량보다 퇴근까지 남은 시간이 같거나 크다면
  // 모든 일을 처리할 수 있으므로 피로도가 없다
  if (works.reduce((a, c) => a + c, 0) <= n) return 0;

  let sorted = works.sort((a, b) => b - a);

  // 퇴근까지 남은 시간이 유효할 동안
  while (n) {
    // 최댓값은 sorted의 맨 앞에 고정
    let max_num = sorted[0];
    
    for (let i = 0; i < sorted.length; i++) {
      // sorted의 값 중 최댓값 이상인 값이 있다면 -1 하기
      // 따라서 최댓값은 항상 맨 앞에 위치함(재정렬할 필요X)
      if (sorted[i] >= max_num) {
        sorted[i] -= 1;
        n -= 1;
      }
      // 퇴근까지 남은 시간이 다 소진되면 탈출
      if (!n) break;
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}