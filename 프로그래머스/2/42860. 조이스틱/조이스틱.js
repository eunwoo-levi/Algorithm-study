function solution(name) {
    var answer = 0;
    const n = name.length;   

    // 세로 이동(알파벳 변경)
    for (let i = 0; i < n; i++) {
        const up = name.charCodeAt(i) - 65;           // 'A' = 65
        const down = 91 - name.charCodeAt(i);        // 'Z'+1 = 91
        answer += Math.min(up, down);
    }
    
  // 2) 가로 이동(커서 이동) 최소화
  let move = n - 1; // 일단 끝까지 오른쪽으로 가는 경우

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n && name[j] === 'A') j++; // i 다음부터 연속 A 끝나는 지점

    // 케이스1) 오른쪽으로 i까지 갔다가 되돌아가서 끝쪽(뒤) 처리
    move = Math.min(move, 2 * i + (n - j));

    // 케이스2) 뒤쪽(끝)부터 처리하러 왼쪽으로 갔다가 다시 i쪽으로
    move = Math.min(move, i + 2 * (n - j));
  }

  return answer + move;

    return answer;
}