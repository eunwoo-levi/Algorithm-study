function solution(s) {
    let res = ''
    let idx = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i]===' '){
            idx = 0;
            res+=' '
            continue;
        }
        
        if(idx%2===0){
            res += s[i].toUpperCase();
            idx++;
        }
        
        else{
            res += s[i].toLowerCase();
            idx++;
        }
    }
    
    return res;
}