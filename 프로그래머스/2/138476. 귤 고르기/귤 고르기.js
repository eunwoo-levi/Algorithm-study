// map? 해시?
function solution(k, tangerine) {
    let res=0;
    const map = {};
    
    tangerine.forEach(t=>map[t]=(map[t] || 0) + 1);
    
    const sortedArr = Object.values(map).sort((a,b)=>b-a)
    
    for(let i=0; i<sortedArr.length; i++){
        k-=sortedArr[i];
        res++;
        if(k<=0) return res;
    }
}