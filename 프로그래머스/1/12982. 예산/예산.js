function solution(d, budget) {
    let res = 0;
    
    d.sort((a,b)=>a-b);
    
    for(let i=0; i<d.length; i++){
        if(d[i]<=budget){
            res++;
            budget-=d[i];
        }
        else{
            break;
        }
    }
    
    return res;
}