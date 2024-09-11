function solution(food) {
    var answer = [0];
    
    for(let i=food.length-1;i>0;i--){
        let n = parseInt(food[i]/2)
        for(let j=0;j<n;j++){
            answer.push(i)
            answer.unshift(i)
        }
    }
    
    
    return answer.join("");
}