function solution(sizes) {
    var answer = 0;
    
    let Max = 0;
    let Max2=0;
    
    for(let i=0; i<sizes.length;i++){
        Max = Math.max(...sizes[i], Max)
    }
    
    for(let i=0;i<sizes.length;i++){
        Max2 = Math.max(Math.min(...sizes[i]),Max2)
    }
    
    answer = Max*Max2
    
    return answer;
}