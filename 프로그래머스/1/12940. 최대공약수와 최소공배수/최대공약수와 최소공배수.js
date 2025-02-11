// greatest common divisor
function gcd(n,m){
    let tmp=0;
    
    if(n<m){
        [n,m] = [m,n]
    }
    
    while(m!==0){
        tmp = n%m;
        n = m
        m = tmp;
    }
    
    return n;
}

// least common multiple
function lcm(n,m,k){
    return n*m/k
}

function solution(n, m) {
    const g = gcd(n,m);
    const l = lcm(n,m,g);
    
    return [g,l]
}