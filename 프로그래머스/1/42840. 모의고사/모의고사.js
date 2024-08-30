function solution(answers) {
    let answer=[]
    
    let A=[1, 2, 3, 4, 5]
    let B=[2, 1, 2, 3, 2, 4, 2, 5]
    let C=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let a=0,b=0,c=0;
    
    for(let i=0;i<answers.length;i++){
        if(answers[i]===A[i%A.length])   a++
        if(answers[i]===B[i%B.length])   b++
        if(answers[i]===C[i%C.length])   c++
    }
    
    let res = [];
    res.push(a,b,c)
    
    let Max = Math.max(...res);
    
    res.map((a,b)=>a===Max&&answer.push(b+1))
    
    return answer;
}