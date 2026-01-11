function solution(n, s) {
    if(s<n) return [-1];
    const arr = Array.from({length: n}, ()=>Math.floor(s/n));
    
    for(let i=0; i<s%n; i++){
        arr[i] += 1;
    }
    
    return arr.sort((a,b)=> a-b);
}