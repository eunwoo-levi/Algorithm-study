function solution(arr, divisor) {
    var answer = [];
    
    for(let i of arr){
        if(i%divisor===0)   answer.push(i);
    }
    
    if(answer.length===0) answer.push(-1)
    answer.sort((a,b)=>a-b)
    
    return answer;
}