// BFS
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];


function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    
    const visited = Array.from({length: N},()=> Array.from({length: M}, ()=> 0));
    
    
    function bfs(){
        const queue = [[0,0]];
        visited[0][0] = 1;
        
        
        while(queue.length){
            const [y, x] = queue.shift();
            
            for(let i=0; i<4; i++){
                const ny = y + dy[i];
                const nx = x + dx[i];

                if(ny>=0 && ny<N && nx>=0 && nx<M
                   && visited[ny][nx]===0 && maps[ny][nx]===1 ){
                    visited[ny][nx] = visited[y][x] + 1;
                    if(ny===N-1 && nx===M-1){
                        return visited[ny][nx];
                    }
                    
                    queue.push([ny, nx]);
                }   
            }
        }
    }
    
    const res = bfs();
    return res ?? -1;
}
