// 최소 단계 반환 + 이미 방문한 단어는 방문 X => BFS
function solution(begin, target, words) {
  let visited = [];
  let queue = [];
  // 예외처리
  if (!words.includes(target)) return 0;

  queue.push([begin, 0]);

  while (queue.length) {
    let [word, cnt] = queue.shift();
    if (word === target) return cnt;
    // 단어 목록 중 word와 한 글자만 차이나는 단어를 큐에 넣는다.
    words.map((el) => {
      let diff = 0;

      for (let i = 0; i < el.length; i++) {
        if (el[i] != word[i]) diff++;
      }

      if (diff === 1) {
        queue.push([el, cnt + 1]);
        visited.push(el);
      }
    });
  }
}
