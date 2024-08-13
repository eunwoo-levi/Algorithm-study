function solution(s) {
    let cnt=0;
    
    s=s.split('')
    
    for(let i=0; i<s.length;i++){
        if(s[i]===' '){
            cnt=0;
            continue;
        }
        
        if(parseInt(cnt%2)===0)   s[i]=s[i].toUpperCase();
        else    s[i]=s[i].toLowerCase();
        cnt++;
    }
    
    return s.join('');
}