function solution(n, info) {
  let max = 0;
  let answer = [-1];
  let ryan = Array(11).fill(0);       

  function DFS(level, count) {
    // 기저 조건(base case)
    if (level == 11 || count == 0) {
      if (count > 0) ryan[10] += count;       // 마지막에 남은 화살이 있다면 0점에 할당하고, 계산 후 다시 제거합니다.
      
      let sum = 0;
      for (let i = 0; i < 11; i++) {
        if (ryan[i] > info[i]) {              // ryan이 apeach보다 해당 level에서 더 많이 맞춘 경우
          sum += (10 - i);
        } 
        else if (info[i] > 0) {               // 해당 level에서 ryan보다 더 많이 맞췄거나, 같은 화살 수인 경우
          sum -= (10 - i);
        }
      }
      
      if (sum > 0 && sum >= max) {
        if (sum > max || isLowerScoreBetter(ryan, answer)) {
          max = sum;
          answer = [...ryan];
        }
      }
      
      if (count > 0) ryan[10] -= count;
      return;
    }
    
    // 
    if (count > info[level]) {
      ryan[level] = info[level] + 1;
      DFS(level + 1, count - ryan[level]);
      ryan[level] = 0;                        // 백트래킹  -  이전 단계로 되돌아감
    }
    
    DFS(level + 1, count);
  }
  
  function isLowerScoreBetter(ryan, answer) {
    for (let i = 10; i >= 0; i--) {           // 가장 낮은 점수를 더 맞이 맞힌 경우 (문제 조건)
      if (ryan[i] !== answer[i]) {
        return ryan[i] > answer[i];
      }
    }
    return false;
  }
  
  DFS(0, n);
  
  return answer[0] === -1 ? [-1] : answer;
}