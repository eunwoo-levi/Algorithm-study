let dx = [0,0,1,-1]; // 시계방향 : 위, 오른쪽, 아래, 왼쪽
let dy = [1,-1,0,0];
let visited;
let Board;

function canVisit(x, y, size){
    if(x<0 || x>=size || y<0 || y>=size) return false;
    if(Board[x][y]==1) return false;
    return true;
}

function solution(board) {
    Board = board;
    let answer;
    let size = board.length;
    // 방향에 따른 저장이 추가로 필요하므로, 삼차원 배열 활용
    let visit = Array.from({length:size},()=>
                           Array.from({length:size},()=>
                                      Array(4).fill(Infinity)));
    visited = visit;
    let q = [];
    q.push([0,0,-1,0]); // x, y, 방향, 금액
    while(q.length){
        let [x, y, d, cost] = q.shift();
        for(let i=0; i<4; ++i){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(canVisit(nx,ny,size)){
                // 직선  100원, 코너 500원+100원 추가
                let newCost = d==i? cost+100 : cost+600;
                if(d<0) newCost = cost+100; // 출발할때(방향 : -1) 항상 직진임
                if(visited[nx][ny][i]>newCost){
                    q.push([nx,ny,i,newCost]);
                    visited[nx][ny][i] = newCost;
                }
            }
        }
    }
    // console.log(visited);
    answer = Math.min(...visited[size-1][size-1]);
    return answer;
}
