function solution(a, b, n) {
    let res = 0
    
    while(n>=a){
        let give = parseInt(n/a)*b
        n = parseInt(n % a) + give;
        res+=give
    }
    
    return res;
}