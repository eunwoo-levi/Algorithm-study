function solution(t, p) {
    const res = [];
    
    const len = p.length;
    
    for(let i=0; i<t.length - len + 1; i++){
        const sliced = t.slice(i, i+len);
        if(sliced <= p){
            res.push(t.slice(i, i+len));
        }
    }
    
    
    return res.length
}