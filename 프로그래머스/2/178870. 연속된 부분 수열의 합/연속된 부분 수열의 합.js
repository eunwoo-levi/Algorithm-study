function solution(sequence, k) {
    const n = sequence.length;
    var answer = [0, n-1];
    let start = 0, end = 0;
    let sum = sequence[0];
    
    while(end < n){
        if(sum < k){
            sum += sequence[++end];
        }
        else if(sum > k){
            sum -= sequence[start++];
        }
        else{
            if(answer[1]-answer[0] > end-start){
                answer = [start, end];
            }
            sum -= sequence[start++];
        }
    }
        
    return answer;
}