function solution(n, k) {
    var answer = 0;
    
    const converted = n.toString(k)
    const arr = converted.split('0').filter(a=>a!=='')
    
    for(const a of arr){
        if(isPrime(a))  answer++;
    }
    
    
    return answer;
}

function isPrime(k){
    if(k<2){
        return false
    }
    
    for(let i=2; i*i<=k; i++){
        if(k%i === 0){
            return false;
        }
    }
    
    return true;
}