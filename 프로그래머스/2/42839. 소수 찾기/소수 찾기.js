function solution(numbers) {
    const n = numbers.length;
    const numSet = new Set();
    const visited = new Array(numbers.length).fill(false);
    
    function dfs(path){
        if(path.length>0)   numSet.add(Number(path));
        if(path.length===n) return;
        
        for(let i=0; i<n; i++){
            if(!visited[i]){
                visited[i] = true;
                dfs(path + numbers[i]);
                visited[i] = false;
            }
        } 
    }
    
    dfs('');
    
    return [...numSet].filter(isPrime).length;
}

const isPrime = (num) => {
    if(num<2) return false;
    for(let i=2; i*i <= num; i++){
        if(num%i===0)   return false;
    }
    
    return true;
} 