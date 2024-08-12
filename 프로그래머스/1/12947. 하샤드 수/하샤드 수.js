function solution(x) {
    var answer = true;
    
    let sum = x.toString().split('').reduce((a, b) => a + parseInt(b), 0);

    if(x%sum!==0) answer =false
    
    return answer;
}