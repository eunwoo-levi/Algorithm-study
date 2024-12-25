function solution(citations) {
    citations.sort((a,b)=>a-b);
    
    let hIndex = 0;
    const n = citations.length
    
    for(let i=0; i<n; i++){
        hIndex = n-i;
        if(citations[i]>=hIndex){
            return hIndex;
            break;
        }
    }
    
    
    return 0;
}