function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        const slicedArr = array.slice(commands[i][0]-1, commands[i][1]);
        slicedArr.sort((a,b)=> a-b);
        answer.push(slicedArr[commands[i][2]-1]);
    }
    
    return answer;
}
