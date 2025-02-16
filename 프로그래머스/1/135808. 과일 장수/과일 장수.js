function solution(k, m, score) {
    let res = 0;
    
    score.sort((a,b)=>b-a);
    
    for(let i=0; i<score.length; i+=m){
        if(i+m-1>=score.length){
            break;
        }
        const minPrice = Math.min(...score.slice(i, i+m))
        res+= minPrice * m
    }
    
    return res;
}