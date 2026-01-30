function solution(n, works) {
    const total = works.reduce((acc , cur)=>acc+cur, 0);
    if(total<n) return 0;
    
    works.sort((a,b)=> a-b);
    const len = works.length;
    
    while(n){
        const max = works[len-1];
        
        for(let i=0; i<len; i++){
                if(works[i]>= max){
                works[i]--;
                n--;
            }
            if(n===0)   break;
        }
    }
    
    return works.reduce((acc, cur)=> acc+ Math.pow(cur, 2), 0);
}