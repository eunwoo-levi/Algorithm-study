function solution(a, b) {
    let res = 0;
    if(a>b){
        let tmp = a;
        a = b;
        b = tmp;
    }
    
    for(let i=a; i<=b; i++){
        res+=i;
    }
    
    return res;
}