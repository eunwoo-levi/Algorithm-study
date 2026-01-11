function solution(routes) {
  let count = 0;
  let camera = -30001;

  routes.sort((a, b) => a[1] - b[1]);

  for (const [start, end] of routes) {
    if (start > camera) {
      count++;
      camera = end; // 진출 지점에 설치
    }
  }
  return count;
}
