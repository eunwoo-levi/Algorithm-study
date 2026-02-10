function solution(board, moves) {
    var answer = 0;
    const stack = [];
    const row = board.length;
    
    for(const move of moves){
        for(let i=0; i < row; i++){
            const found = board[i][move-1];
            if(found!==0){
                board[i][move-1] = 0;
                // 잡은 인형들 넣은 stack 안에서 이제 넣거나 터트리는 로직
                if(stack.length === 0)  stack.push(found);
                else{
                    if(found===stack[stack.length-1]){
                        stack.pop();
                        answer+=2;
                    }
                    else    stack.push(found);
                }
                break;
            }
        }
        
    }
        console.log(stack)
    
    return answer;
}