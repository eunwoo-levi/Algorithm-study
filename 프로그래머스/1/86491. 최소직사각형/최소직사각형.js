function solution(sizes) {
    let maxA = -1, maxB = -1;
    
    for(let [a, b] of sizes){
        if(a<b){
            [a, b] = [b, a];
        }
        
        if(a>maxA)  maxA = a;
        if(b>maxB)  maxB = b;
    }
    
    return maxA * maxB;
}