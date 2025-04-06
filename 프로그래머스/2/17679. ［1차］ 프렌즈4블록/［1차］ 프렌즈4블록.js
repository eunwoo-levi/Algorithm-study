function solution(m, n, board) {
  board = board.map(row => row.split(''));
  let answer = 0;

  while (true) {
    const remove = Array.from({ length: m }, () => Array(n).fill(false));
    let hasMatch = false;

    // 2x2 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const char = board[i][j];
        if (char !== ' '
          && char === board[i][j + 1]
          && char === board[i + 1][j]
          && char === board[i + 1][j + 1]) {
          remove[i][j] = remove[i][j + 1] = true;
          remove[i + 1][j] = remove[i + 1][j + 1] = true;
          hasMatch = true;
        }
      }
    }

    if (!hasMatch) break;

    // 블록 제거 + 카운트
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (remove[i][j]) {
          board[i][j] = ' ';
          answer++;
        }
      }
    }

    // 블록 떨어뜨리기
    for (let j = 0; j < n; j++) {
      let emptyRow = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] !== ' ') {
          board[emptyRow][j] = board[i][j];
          if (emptyRow !== i) board[i][j] = ' ';
          emptyRow--;
        }
      }
    }
  }

  return answer;
}