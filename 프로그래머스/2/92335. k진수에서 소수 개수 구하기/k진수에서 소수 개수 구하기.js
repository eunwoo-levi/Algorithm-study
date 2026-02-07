function solution(n, k) {
    var answer = 0;
    
    const binary = n.toString(k).split("0");
    for(let i=0; i<binary.length; i++){
        if(isPrime(binary[i]))  answer++;
    }
    
    return answer;
}

function isPrime(k){
    if(k<2) return false;
    
    for(let i=2; i*i <=k; i++){
        if(k%i===0) return false;
    }
    
    return true;
}