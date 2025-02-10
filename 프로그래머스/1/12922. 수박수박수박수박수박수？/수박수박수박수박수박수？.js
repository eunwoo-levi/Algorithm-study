function solution(n) {
    let res='';
    
    for(let i=0; i<n;i++){
        if(i%2===0){
            res+='수'
        }
        else{
            res+='박'
        }
    }
    
    return res;
}