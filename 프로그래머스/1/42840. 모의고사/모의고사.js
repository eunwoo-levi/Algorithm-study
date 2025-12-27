const first = [1, 2, 3, 4, 5]
const second = [2, 1, 2, 3, 2, 4, 2, 5]
const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

function solution(answers) {
    let result = [];
    let firstScore=0, secondScore=0, thirdScore=0;
    
    for(let i=0; i<answers.length; i++){
        const answer = answers[i];
        if(answer === first[i%first.length])    firstScore++;
        if(answer === second[i%second.length])  secondScore++;
        if(answer === third[i%third.length])    thirdScore++;
    }
    
    const max = Math.max(firstScore, secondScore, thirdScore);
    
    [firstScore, secondScore, thirdScore].forEach((s,index)=>{
        if(s===max) result.push(index+1);
    });
    
    return result;
}