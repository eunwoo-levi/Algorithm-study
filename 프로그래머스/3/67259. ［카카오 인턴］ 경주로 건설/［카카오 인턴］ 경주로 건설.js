const dx = [1, -1 , 0, 0];
const dy = [0, 0, 1, -1];

function solution(board) {
    const n = board.length;
    
    const costs = Array.from({length: n}, ()=> Array.from({length: n}, 
                                            () => Array.from({length: 4}, () => Infinity)));
    const q = [[0, 0, -1, 0]];
    
    while(q.length){
        const [y, x, d, cost] = q.shift();
        
        for(let i=0; i<4; i++){
            const ny = y + dy[i];
            const nx = x + dx[i];
            if(nx>=0 && nx<n && ny>=0 && ny<n && board[ny][nx] === 0){
                let newCost = d === i ? cost + 100 : cost + 600;
                if(d===-1)  newCost = cost + 100;
                if(costs[ny][nx][i] > newCost){
                    costs[ny][nx][i] = newCost;
                    q.push([ny, nx, i, newCost]);
                }
            }
        }
    }
    
    return Math.min(...costs[n-1][n-1]);
}

// d => 바로 직전 방향임 (이동 비용은 “이전 방향(d)과 이번 방향(i)이 같은지”로 결정)
// costs(or visited)가 3차원이어야 하는 이유는 한 문장으로 “같은 칸이라도 ‘어느 방향으로 들어왔는지’에 따라 다음 비용이 달라서, 칸만 같다고 같은 상태가 아니기 때문”