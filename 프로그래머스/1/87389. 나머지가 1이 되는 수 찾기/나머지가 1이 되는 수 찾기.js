function solution(n) {
    
    for(let i=1; i<n;i++){
        if(Math.floor(n%i)===1){
            return i;
        }
    }
}