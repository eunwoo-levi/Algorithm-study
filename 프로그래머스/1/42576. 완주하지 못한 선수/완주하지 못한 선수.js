function solution(participant, completion) {
    const obj = {}
    
    for(let i of participant){
        if(obj[i]){
            obj[i]+=1
        }
        else{
            obj[i]=1
        }
    }
    
    for(let i of completion){
        obj[i]-=1;
    }
    
    for(let key in obj){
        if(obj[key]>0){
            return key
        }
    }
    
}