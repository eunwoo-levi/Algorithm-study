// 스택,큐 & 그리디
function solution(progresses, speeds) {
    var answer = [];
    const days = progresses.map((p,index)=> Math.ceil((100-p)/speeds[index]));
    
    let maxDay = days[0];
    let count = 1;
    
    for(let i=1; i<days.length; i++){
        if(maxDay<days[i]){
            maxDay = days[i];
            answer.push(count);
            count = 1;
            continue;
        }
        count++;
    }
    answer.push(count);
    
    return answer;
}