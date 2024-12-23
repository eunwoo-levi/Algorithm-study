function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let start = 0; 
    let end = people.length - 1;
    let res = 0; 
    
    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            start++;
        }
        // 무거운 사람은 무조건 보트를 타야 하므로 end만 이동
        end--;
        res++;
    }
    
    return res;
}
