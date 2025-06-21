function solution(cards1, cards2, goal) {
    for(letter of goal){
        if(cards1[0]===letter)  cards1.shift();
        else if(cards2[0]===letter) cards2.shift();
        else    return 'No'
    }
    
    
    
    return 'Yes'
}