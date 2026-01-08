// 최소 단계 반환 + 이미 방문한 단어는 방문 X => BFS
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = new Array(words.length).fill(false);
  const queue = [[begin, 0]];
  let head = 0;

  while (head < queue.length) {
    const [curWord, cnt] = queue[head++];

    if (curWord === target) return cnt;

    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;

      let diff = 0;
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] !== curWord[j]) diff++;
        if (diff > 1) break; // ✅ 빨리 탈출
      }

      if (diff === 1) {
        visited[i] = true;
        queue.push([words[i], cnt + 1]);
      }
    }
  }

  return 0;
}
