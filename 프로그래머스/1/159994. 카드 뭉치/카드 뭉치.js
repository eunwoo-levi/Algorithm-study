function solution(cards1, cards2, goal) {
    
    let a=0, b=0;
    
    for(let i=0; i<goal.length;i++){
        if(a<cards1.length && goal[i]===cards1[a]){
            a++;
        }
        else if(b<cards2.length && goal[i]===cards2[b]){
            b++;
        }
        
        else{
            return "No"
        }
    }
    
    return "Yes"
    
}