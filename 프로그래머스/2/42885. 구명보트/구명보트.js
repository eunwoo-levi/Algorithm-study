function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b)=> a-b);
    let start=0, end=people.length-1;
    
    while(start <= end){
        if(people[start]+people[end]<=limit){
            start++
        }
        end--;
        answer++;
    }
    
    return answer;
}