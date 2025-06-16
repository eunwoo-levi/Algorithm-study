function solution(A,B){
    let res = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    return A.reduce((acc, cur,idx)=> acc+cur*B[idx], 0);
}