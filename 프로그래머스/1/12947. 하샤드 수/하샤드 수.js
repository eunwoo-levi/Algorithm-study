function solution(x) {
    let sum=0
    
    let s = x.toString()
    
    for(let i=0; i<s.length ; i++){
        sum += Number(s[i]);
    }
    

    return Number.isInteger(x/sum) ? true : false
}