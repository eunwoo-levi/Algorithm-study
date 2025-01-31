



function solution(k, dungeons) {
    let res = 0;
    const visited = new Array(dungeons.length).fill(0)
    
    function dfs(hp, depth){
        for(let i=0; i<dungeons.length; i++){
            if(!visited[i] && dungeons[i][0]<=hp){
                visited[i] = 1;
                dfs(hp-dungeons[i][1], depth+1)
                visited[i] = 0;
            }
        }
        
        res = Math.max(res, depth)
    }
    
    dfs(k, 0)
    
    return res;
}