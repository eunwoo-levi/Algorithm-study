function solution(n, k) {
    var answer = 0;
    
    const arr = n.toString(k).split('0').filter(s=>s)
    
    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i])){
            answer++;
        }
    }
    
    return answer;
}

function isPrime(n){
    if(n<=1){
        return false;
    }
    
    for(let i=2; i*i <= n; i++){
        if(n % i === 0){
            return false;
        }
    }
    
    return true;
}