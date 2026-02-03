function solution(dice) {
    const N = dice.length;
    
    const combinations = combination(N, N / 2);
    let answer = [], answerCount = 0;
    
    combinations.forEach((comb) => {
        const [diceA, diceB] = getDices(comb, dice, N);
        
        const arrA = getOutcomes(diceA, N / 2);
        const arrB = getOutcomes(diceB, N / 2).sort((a, b) => a - b);
        
        const winCount = calculateWinCount(arrA, arrB);
        
        if(winCount > answerCount) {
            answer = comb;
            answerCount = winCount;
        }
    })
    
    return answer.map((v) => v + 1);
}
 
function combination(n, c){
    const result = [];
    function dfs(curArr, idx){
        if(curArr.length===c){
            result.push([...curArr]);
            return;
        }
        
        for(let i=idx; i<n; i++){
            curArr.push(i);
            dfs(curArr, i+1);
            curArr.pop();
        }
    }
    
    dfs([], 0);
    return result;
}
 
function getDices(chosen, dice, N) {
    const diceA = [], diceB = [];
    
    let idx=0;
    for(let i=0; i<N; i++){
        if(chosen[idx] === i) {
            diceA.push(dice[i]); idx++;
        }
        else diceB.push(dice[i]);
    }
    
    return [diceA, diceB];
}
 
function getOutcomes(dices, N) {
    const result = [];
    function combination(idx, sum){
        if(idx === N){
            result.push(sum);
            return;
        }
        
        for(let i=0; i<6; i++) combination(idx + 1, sum + dices[idx][i]);
    }
    combination(0, 0);
    return result;
}
 
function calculateWinCount(arrA, arrB) {
    let count = 0;
    
    arrA.forEach((v) => {
        let left=0, right = arrB.length - 1, mid;
        let rowCount = -1;
        
        while(left <= right) {
            mid = Math.floor((left + right) / 2);
            
            if(arrB[mid] < v){
                rowCount = Math.max(mid, rowCount);
                left = mid + 1;
            }
            else right = mid - 1;
        }
        count += rowCount + 1;
    })
    
    return count;
}
 
// https://fordang.tistory.com/245