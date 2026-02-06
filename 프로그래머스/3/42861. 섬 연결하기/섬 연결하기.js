function solution(n, costs) {
    let answer = 0, picked = 0;
    const parent = Array.from({length: n}, (_, i)=> i);
    
    // 1) 비용 오름차순 - 크루스칼은 해야함 (-> 그리디)
    costs.sort((a,b)=> a[2]-b[2]);
    
    // 2) Union-Find - 싸이클 안생기기 위해.
    function find(x){
        if(parent[x]===x)   return x;
        parent[x] = find(parent[x]);
        return parent[x];
    }
    
    function union(x,y){
        const rx = find(x);
        const ry = find(y);
        
        if(rx === ry)   return false;
        parent[ry] = rx;
        return true;
    }
    
    // 3) Kruskal
    for(const [a, b, cost] of costs){
        if(union(a,b)){
            answer+=cost;
            picked++;
        }
        
        if(picked === n-1)  return answer;
    }
    
    return answer;
}


// Kruskal Algorithm 를 사용해야함 -> 가중치 정렬해서 싸이클 안생기는 선에서 하나씩 선택
// http://chanhuiseok.github.io/posts/algo-33/
// https://lazyhysong.tistory.com/entry/JS-Kruskal-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0