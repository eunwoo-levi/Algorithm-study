function solution(x, n) {
    var answer = [x];
    
    let k=x;
    
    for(let i=1; i<n;i++){
        x+=k
        answer.push(x)
    }
    
    return answer;
}