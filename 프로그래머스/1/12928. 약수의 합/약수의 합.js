
function solution(n) {
    let res=0;
    for(let i=1; i<=n;i++){
        if(Math.floor(n%i)===0){
            res+=i;
        }
    }
    return res;
}