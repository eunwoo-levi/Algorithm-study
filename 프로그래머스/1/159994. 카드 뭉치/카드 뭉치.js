function solution(cards1, cards2, goal) {
    let n=0, m=0;
    
    for(let i=0; i<goal.length; i++){
        if(n>cards1.length || m>cards2.length){
            console.log("?????????????")
            return "No"
        }
        
        if(cards1[n]===goal[i]){
            n++;
        }
        else if(cards2[m]===goal[i]){
            m++;
        }
        else{
            return "No"
        }
    }
    
    return "Yes"
}