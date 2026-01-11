function solution(k, tangerine) {
    var answer = 0;
    
    const map = new Map();
    
    for(const t of tangerine){
        map.set(t , (map.get(t) || 0 )+1);
    }
    
    const tans = [...map.entries()];
    tans.sort((a,b)=> b[1] - a[1])
    
    for(const tan of tans){
        k-= tan[1];
        answer++;
        if(k<=0)    return answer;
    }
    
    console.log(tans)
    
    return answer;
}