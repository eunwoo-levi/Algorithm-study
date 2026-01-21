function solution(jobs) {
    /// 들어온 순서대로 나열
    jobs.sort((a,b)=>a[0]-b[0]);
    let answer = 0;
    let temp = [];
    const len = jobs.length;
    /// 시작 시간
    let counter = 0;
    while(jobs.length > 0 || temp.length > 0){
        while(jobs.length > 0 && jobs[0][0]<=counter){
            temp.push(jobs.shift());
        }
        if (temp.length > 0){
            temp.sort((a,b)=>a[1]-b[1]);
            const job = temp.shift();
            answer += ((counter + job[1])-job[0]);
            counter += job[1];
        }
        else{
            counter = jobs[0][0];
        }
    }
    
    return Math.floor(answer/len);
}