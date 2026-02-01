function solution(m, n, puddles) {
    const dp = Array.from({length: n+1}, ()=> Array.from({length: m+1}, ()=> 0));
    const blocked = Array.from({length: n+1}, ()=> Array.from({length: m+1}, ()=>false));
    
    dp[1][1] = 1;
    
    for(const [m,n] of puddles){
        blocked[n][m] = true;
    }
    
    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(i===1 && j===1)  continue;
            if(blocked[i][j])   continue;
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1_000_000_007;
        }
    }
    
    return dp[n][m];
}