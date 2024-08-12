function solution(n) {
    let answer=-1;
    
    for(let i=1; i<=parseInt(Math.ceil(n/2));i++){
        if(Math.pow(i,2)===n){
            answer=Math.pow(i+1,2);
            return answer;
        }
    }
    
    return answer
}