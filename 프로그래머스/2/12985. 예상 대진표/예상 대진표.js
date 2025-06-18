// 그래프 - 이진트리 + 시뮬레이션
function solution(n,a,b)
{
    let res = 0;
    
    while(a!==b){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        
        res++;
    }
    
    return res;
}