function solution(sticker) {
    var answer = 0;
    const N = sticker.length;
    
    if (N === 1) return sticker[0];
    if (N === 2) return Math.max(sticker[0], sticker[1]);

    const dp1 = Array.from({length: N}, ()=>0);
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    const dp2 = Array.from({length: N}, ()=>0);
    dp2[0] = 0;
    dp2[1] = sticker[1];
    
    for(let i=2; i<N; i++){
        if(i!==N-1){
            dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i]);
            
        } else{
            dp1[i] = dp1[i-1];
        }
        
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i]);
    }


    return Math.max(dp1[N-1], dp2[N-1]);
}