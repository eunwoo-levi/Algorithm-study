function solution(numbers) {
    const N = numbers.length;
    const set = new Set();
    const visited = Array.from({length: N+1}, ()=>false);
    
    // 순열
    function dfs(num){
        if(num.length>0)    set.add(Number(num));
        if(num.length===N)    return;
        
        for(let i=0; i<N; i++){
            if(!visited[i]){
                visited[i] = true;
                dfs(num + numbers[i]);
                visited[i] = false;
            }
        }
    }
    
    dfs('');
    
    return [...set].filter(isPrime).length;
}

const isPrime = (num) => {
    if(num<2) return false;
    for(let i=2; i*i <= num; i++){
        if(num%i===0)   return false;
    }
    
    return true;
} 