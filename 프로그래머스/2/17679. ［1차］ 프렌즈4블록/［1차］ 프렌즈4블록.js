// 1. 2x2 찾기  - 못찾으면 while문 멈추고 끝
// 2. 찾은 것들을 모두 지우고, 총 갯수 구하기
// 3. 지워진 자리 위에 있던 것들을 아래로 떨구기
// 4. while 문 -> 2x2가 안찾아질 때까지 반복

function solution(m, n, board) {
    var answer = 0;
    board = board.map(b=>b.split(''));
    
    while(1){
        const removed = Array.from({length: m}, ()=> Array.from({length: n}, ()=>false));
        let found = false;
        
        // 1. 2x2 찾기
        for(let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                const c = board[i][j];
                if(c !== ' ' && board[i][j+1] === c && board[i+1][j] === c 
                   && board[i+1][j+1] === c){
                    removed[i][j]=removed[i][j+1]=removed[i+1][j]=removed[i+1][j+1] = true;
                    found = true;
                }
            }
        }
        
        if(!found)  return answer;
        
        // 2. 2x2 찾은거 제거 및 카운팅
        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                if(removed[i][j]===true){
                    answer++;
                    board[i][j] = ' ';
                }
            }
        }
        
        // 3. 지운자리 위에 있는 것들 떨구기
        for (let j = 0; j < n; j++) {        // 열(column) 단위로 처리
            let emptyRow = m - 1;             // 현재 블록이 떨어질 위치 (맨 아래)

            for (let i = m - 1; i >= 0; i--) {// 아래 → 위로 훑기
                if (board[i][j] !== ' ') {      // 블록이 있으면
                    board[emptyRow][j] = board[i][j];
                    if (emptyRow !== i) board[i][j] = ' ';
                    emptyRow--;
                }
            }
        }
    }
    
    return answer;
}