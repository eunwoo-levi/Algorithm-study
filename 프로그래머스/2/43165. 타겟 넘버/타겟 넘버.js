// dfs
function solution(numbers, target) {
    var answer = 0;
    
    function dfs(length, sum){
        if(length===numbers.length){
            if(sum===target)    answer++;
            return;
        }
        
        dfs(length+1, sum+numbers[length]);
        dfs(length+1, sum-numbers[length]);
    }
    dfs(0,0);
    
    return answer;
}