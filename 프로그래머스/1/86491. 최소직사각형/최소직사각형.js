function solution(sizes) {
    const max = Math.max(...sizes.flat())
    let secondMax = 0;
    
    for(let [x, y] of sizes){
        const min = Math.min(x,y);
        if(secondMax<min)   secondMax = min;
    }
    
    
    return max * secondMax;
}