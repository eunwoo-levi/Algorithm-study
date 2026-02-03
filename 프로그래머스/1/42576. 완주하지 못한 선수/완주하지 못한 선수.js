function solution(participant, completion) {
    const map = new Map();
    
    for(const p of participant){
        map.set(p, (map.get(p) | 0) + 1 );
    }
    
    for(const c of completion){
        map.set(c, map.get(c) - 1);
    }
    
    for(const [k, v] of [...map.entries()]){
        if(v!==0)   return k;
    }
}