function solution(numbers, target) {
    let res=0;
    
    function dfs(depth, sum){
        if(depth===numbers.length){
            if(sum===target){
                res++;
            }
            return;
        }
        
        
        dfs(depth+1, sum+numbers[depth]);
        dfs(depth+1, sum-numbers[depth]);
    }
    
    dfs(0,0);
    
    return res;

}