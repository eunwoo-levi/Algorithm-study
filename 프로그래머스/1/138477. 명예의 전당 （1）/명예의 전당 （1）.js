function solution(k, score) {
    let res = [];
    let pq = [];
    
    for(let i=0; i<score.length; i++){
        if(pq.length===k){
            if(pq[0]<score[i]){
                pq.shift();
                pq.push(score[i])
                pq.sort((a,b)=>a-b);
            }
            res.push(pq[0]);
            continue;
        }
        
        pq.push(score[i]);
        pq.sort((a,b)=>a-b);
        res.push(pq[0])
    }
    
    return res
}