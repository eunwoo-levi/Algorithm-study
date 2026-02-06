function solution(n, costs) {
    let answer = 0;
    let edgy = 0;
    let parent = Array.from({length: n}, (_, i)=>i);
    
    costs.sort((a,b)=>a[2]-b[2]);
    
    // Kruskal
    for(const [a, b, cost] of costs){
        if(union(a, b)){
            edgy++;
            answer += cost;
        }
        
        if(edgy===n-1)  return answer
    }
    
    function union(a, b){
        const pA = find(a);
        const pB = find(b);

        if(pA===pB) return false;
        parent[pB] = pA;
        return true;
    }

    function find(x){
        if(parent[x]===x)   return x;
        parent[x] = find(parent[x]);
        return parent[x];
    }
    
    
    return answer;
}


// Kruskal Algorithm 를 사용해야함 -> 가중치 정렬해서 싸이클 안생기는 선에서 하나씩 선택
// http://chanhuiseok.github.io/posts/algo-33/
// https://lazyhysong.tistory.com/entry/JS-Kruskal-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0