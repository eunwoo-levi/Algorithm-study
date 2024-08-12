function solution(n)
{
    var answer = 0;

    let res = n.toString().split('').map(Number)
    answer = res.reduce((answer,e)=>answer+e)
    
    return answer;
}