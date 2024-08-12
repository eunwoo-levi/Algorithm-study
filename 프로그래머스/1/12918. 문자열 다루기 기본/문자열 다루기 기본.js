function solution(s) {
    
    if(s.length!=4 && s.length!=6)    return false
    
    for(let i of s){
        if(isNaN(i)) return false
    }
    
    return true
}