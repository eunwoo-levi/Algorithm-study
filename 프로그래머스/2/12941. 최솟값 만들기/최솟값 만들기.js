function solution(A,B){
    let res=0
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
    for(let i=0; i<A.length; i++){
        res += A[i]*B[i]
    }
    
    return res;
}