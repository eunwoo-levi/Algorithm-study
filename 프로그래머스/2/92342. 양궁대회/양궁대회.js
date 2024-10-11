function solution(n, info) {
    var answer = [-1];
    
    let max = 0;
    let ryan = new Array(info.length).fill(0)
    
    function dfs(level, arrow){
        // 기저 조건
        if(level===11 || arrow ===0){
            if (arrow > 0) ryan[10] += arrow;
            
            let sum=0;
            for(let i=0; i<info.length;i++){
                if(ryan[i] > info[i]){
                    sum+=10-i;
                }
                else if (info[i]){
                    sum-=10-i;
                }
            }
            
            if(sum>0 && sum>max){
                max = sum;
                answer = [...ryan]
            }
            else if(sum>0 && sum===max){
                for(let i=10; i>=0; i--){
                   if(ryan[i]!==answer[i]){
                       if(ryan[i]>answer[i]){
                           max=sum;
                           answer = [...ryan]
                       }
                       break;
                   }
                    
                }
            }
            
            if (arrow > 0) ryan[10] -= arrow; 
            return;
        }
        
        
        if(arrow>info[level]){
            ryan[level]=info[level]+1;
            dfs(level+1, arrow-ryan[level])
            ryan[level] = 0;
        }
        
        dfs(level+1, arrow)
    }
    
    dfs(0, n)
    
    return answer;
}