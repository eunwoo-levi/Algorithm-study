function solution(msg) {
    const res = [];
    const dic = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let before = '' 
    for(let i=0; i<msg.length; i++){
        before+=msg[i];
        
        if(!dic.includes(before)){
            res.push(dic.indexOf(before.slice(0, -1)))
            
            dic.push(before)
            
            before = msg[i]
        }
    }
    
    if(before){
        res.push(dic.indexOf(before))
    }
    
    return res;
}