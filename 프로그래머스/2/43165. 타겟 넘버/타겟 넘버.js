function solution(numbers, target) {
    var answer = 0;
    const N = numbers.length;
    
    function dfs(sum,idx){
        if(idx===N){
            if(sum===target)    answer++;
            return;
        }
        
        dfs(sum+numbers[idx], idx+1);
        dfs(sum-numbers[idx], idx+1);
    }
    
    dfs(0, 0);
    
    return answer;
}