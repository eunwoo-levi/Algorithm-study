function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length: n}, ()=> false);
    
    
    function dfs(idx){
        visited[idx] = true;
        
        for(let i=0; i < computers[idx].length; i++){
            if(!visited[i] && computers[idx][i]===1){
                dfs(i);
            }
        }
    }
    
    // Node 차례대로 start!
    for(let i=0; i<n; i++){
        if(!visited[i]){
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}