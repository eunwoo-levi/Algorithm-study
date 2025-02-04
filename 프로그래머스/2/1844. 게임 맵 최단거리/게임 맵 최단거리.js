function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0, 1]]; // [x좌표, y좌표, 현재까지의 거리]
    
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[0][0] = true;
    
    while (queue.length) {
        const [x, y, distance] = queue.shift();
        
        if (x === rows - 1 && y === cols - 1) {
            return distance;
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (
                nx >= 0 && nx < rows &&
                ny >= 0 && ny < cols &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}
