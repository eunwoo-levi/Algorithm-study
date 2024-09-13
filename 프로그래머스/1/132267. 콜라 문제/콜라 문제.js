function solution(a, b, n) {
    var answer = 0;
    
    while(n>=a){
        let k = parseInt(n/a)*b
        n = parseInt(n%a) + k
        answer+=k
       console.log(n)
    }
    
    return answer;
}