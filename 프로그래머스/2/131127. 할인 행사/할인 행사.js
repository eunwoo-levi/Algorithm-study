function solution(want, number, discount) {
    let count = 0;
    for(let i=0; i<discount.length - 9; i++){
        const sliced = discount.slice(i, i+10);
        
        let flag = true;
        for(let j=0; j<want.length; j++){
            const foundLength = sliced.filter(s=>s===want[j]).length;
            if(foundLength < number[j]){
                flag = false;
                break;
            }
        }
        
        if(flag)    count += 1;
    }
    
    
    return count;
}