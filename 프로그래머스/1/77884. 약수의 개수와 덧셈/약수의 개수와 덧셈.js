function solution(left, right) {
    let res=0;
    
    for(let i=left; i<=right; i++){
        if(factors(i)%2===0){
            res+=i
        }
        else{
            res-=i
        }
    }
    
    return res;
}

function factors(n){
    let cnt=0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            cnt++;
        }
    }
    
    return cnt;
}