function solution(n, times) {
    var answer = 0;
    times.sort((a,b)=> a-b);
    
    let l=0, r=times[times.length-1] * n;
    
    function canPass(mid){
        let count = 0;
        for(const time of times){
            count+=Math.floor(mid/time);
            if(count>=n)    return true;
        }
        
        return false;
    }
    
    while(l<=r){
        const mid = Math.floor((l+r)/2);
        if(canPass(mid)){
            answer = mid;
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
    
    return answer;
}