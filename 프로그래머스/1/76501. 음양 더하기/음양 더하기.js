function solution(absolutes, signs) {
    
    for(let i in signs){
        if(signs[i]===false){
            absolutes[i] = absolutes[i]*-1;
        }
    }
    
    let answer = absolutes.reduce((a,b)=> a+b,0)
        
    return answer;
}