const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    const dist = Array.from({length: N}, ()=> Array.from({length: M}, ()=> 0));
    const queue = [[0, 0]];
    dist[0][0] = 1;
    
    while(queue.length>0){
        const [y, x] = queue.shift();
        
        if(y===N-1 && x===M-1){
            return dist[y][x];
        }
        
        for(let i=0; i<4; i++){
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if(ny<0||ny>=N||nx<0||nx>=M||dist[ny][nx]!==0||maps[ny][nx]===0)    continue;
            dist[ny][nx] = dist[y][x] + 1;
            queue.push([ny, nx]);
        }
    }
    
    return -1;
}