function solution(n)
{
    let res = 0
    while(n!==0){
        if(n%2===0){
            n/=2;
        }
        else{
            n-=1;
            res++;
        }
    }
    
    return res
}

// 그리디