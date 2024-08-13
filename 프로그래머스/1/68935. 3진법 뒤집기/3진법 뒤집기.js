function solution(n) {
    let res="";
    while(n>0){
        res =Math.floor(n%3)+''+ res;
        n=Math.floor(n/3);
    }
    
    
    return res.split('').map(Number).reduce((acc,cur,i)=> acc+cur*Math.pow(3,i),0) 
    
}

