function solution(s) {
    let check = 0;
    let res = ''
    
    s.split('').forEach((l)=>{
        if(l===' '){
            check=0;
            res+=' '
            return;
        }
        if(check===0){
            res +=  l.toUpperCase();
        }
        else{
            res += l.toLowerCase();
        }
        check++;
    })
    
    return res;
}