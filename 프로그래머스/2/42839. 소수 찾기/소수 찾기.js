function solution(numbers) {
    var answer = 0;
    const N = numbers.length;
    const set = new Set();
    const visited = Array.from({length: N}, ()=> false);
    
    // Permutation
    function dfs(s){
        if(s.length>0)  set.add(Number(s));
        if(s.length===N)    return;

        for(let i=0; i<N; i++){
            if(visited[i])  continue;
            visited[i] = true;
            dfs(s+numbers[i]);
            visited[i] = false;
        }
    }
    dfs("")
    
    const numberArr = [...set];
    
    for(const n of numberArr){
        if(isPrime(n)){
            answer++;
        }
    }
    
    // 소수 찾기
    function isPrime(k){
        if(k<2)   return false;
        for(let i=2; i*i <= k; i++){
            if(k%i===0) return false;
        }
        
        return true;
    }
    
    return answer;
}