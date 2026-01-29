function solution(operations) {
    const pq = [];
    
    for(const operation of operations){
        const [op, num] = operation.split(" ");
        
        if(op==='I'){
            pq.push(Number(num));
            pq.sort((a,b)=>a-b);
        }
        
        else{
            if(num==='1')   pq.pop();
            else    pq.shift();
        }
    }
    
    return pq.length===0 ? [0,0] : [pq[pq.length-1], pq[0]];
}