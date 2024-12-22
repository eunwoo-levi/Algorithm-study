function findOne(n){
    return n.toString(2).split('1').length-1
}

function solution(n) {
    let count = findOne(n)
    
    let res = n;
    
    while(1){
        res++;
        if(findOne(res)===count){
            return res;
        }
    }
}