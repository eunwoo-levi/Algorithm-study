function solution(n, m) {
    var answer = [];
    
    let tmp=0;
    let k=n*m;
    
    if(n<m) [n,m] = [m,n]
    
    while(m!==0){
        tmp=n%m;
        n=m;
        m=tmp;
    }
    
    answer.push(n,parseInt(k/n))
    
    return answer;
}