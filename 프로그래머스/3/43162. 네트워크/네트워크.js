function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length: n}, ()=> false);
    
    function dfs(index){
        visited[index] = true;
        
        for(let i=0; i < computers[index].length; i++){
            if(!visited[i] && computers[index][i] === 1){
                dfs(i);
            }
        }
    }
    

    for(let i=0; i<n; i++){
        if(!visited[i]){
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}

// DFS