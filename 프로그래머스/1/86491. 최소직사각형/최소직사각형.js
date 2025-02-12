function solution(sizes) {
    let maxSize = 0;
    let secondMaxSize = 0;
    
    sizes.map((twoSize)=>{
        const biggerSize = Math.max(...twoSize);
        if(maxSize<=biggerSize){
            maxSize = biggerSize
        }
    })
    
    sizes.map((twoSize)=>{
    const [a,b] = twoSize.sort((a,b)=>a-b);
    if(a>secondMaxSize){
        secondMaxSize = a;
    }
    })
    
    return maxSize * secondMaxSize
}