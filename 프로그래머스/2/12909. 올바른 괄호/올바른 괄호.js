function solution(s){
    let arr = [];
    
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    
    for(let i=0; i<s.length; i++){
        if(open.includes(s[i])){
            arr.push(s[i]);
        }
        else{
            const idx = close.indexOf(s[i]);
            const popVal = arr.pop();
            if(open[idx]!==popVal){
                return false;
            }
        }
    }
    
    if(arr.length!==0){
        return false;
    }
    
    return true;
}
    
