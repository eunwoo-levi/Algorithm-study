function solution(n, edge) {
    var answer = 0;
    
    const graph = Array.from({length: n+1}, ()=> []);
    
    for(const [a,b] of edge){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const dist = Array.from({length: n+1}, ()=> -1);
    const q = []
    
    dist[1] = 0;
    q.push(1);
    
    while(q.length){
        const cur = q.shift();
        
        for(const next of graph[cur]){
            if(dist[next] !== -1)   continue;
            dist[next] = dist[cur] + 1;
            q.push(next);
        }
    }
    
    const max = Math.max(...dist);
    
    for(let i=0; i<dist.length;i++){
        if(dist[i]===max)   answer++;
    }
    
    
    return answer;
}

// 최단 거리? -> BFS
// DFS는 길어도 계속 가서 최단거리 보장 X