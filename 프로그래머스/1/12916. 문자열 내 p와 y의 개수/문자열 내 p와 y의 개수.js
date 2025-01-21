function solution(s){
    let cnt=0;

    for(let i=0; i<s.length;i++){
        if(s[i].toLowerCase()==='p'){
            cnt++;
        }
        else if(s[i].toLowerCase()==='y'){
            cnt--;
        }
    }

    return cnt===0;
}