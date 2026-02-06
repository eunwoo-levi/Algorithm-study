function solution(triangle) {
    var answer = 0;
    const len = triangle.length;
    const dp = Array.from({length: len}, ()=> 0)
    
    dp[0] = triangle[0][0];
    
    for(let i=1; i<len; i++){
        for(let j=i; j>=0; j--){
            if(j===0)   dp[j] = triangle[i][j] + dp[0];
            else if(j===i)  dp[j] = triangle[i][j] + dp[j-1];
            else    dp[j] = triangle[i][j] + Math.max(dp[j-1], dp[j]);
        }
    }
        
    for(let i=0; i<dp.length; i++){
        if(answer<dp[i])    answer = dp[i];
    }
    
    
    return answer;
}