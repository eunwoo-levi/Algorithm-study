function solution(number, limit, power) {
    var answer = 0;
    
    for (let n = 1; n <= number; n++) {
        let count = 0;
        
        for (let j = 1; j <= Math.sqrt(n); j++) {
            if (n % j === 0) {  
                count++; 
                if (j !== n / j) {  // j와 n/j가 다르면 n/j도 약수
                    count++;
                }
            }
        }
        
        if (count > limit) count = power;
        answer += count;
    }
    
    return answer;
}
