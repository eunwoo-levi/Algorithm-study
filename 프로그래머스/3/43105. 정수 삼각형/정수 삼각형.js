function solution(triangle) {
    const N = triangle.length;
    const dp = Array.from({length: N}, ()=> Array.from({length: N}, ()=> 0));
    dp[0][0] = triangle[0][0]
    
    for(let i=1; i<N; i++){
        for(let j=0; j<=i; j++){
            if(j==0)    dp[i][0] = dp[i-1][0] + triangle[i][j]
            else if(j===i)  dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            else    dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
        }
    }
    
    return Math.max(...dp[N-1])
}

// DP