function solution(stones, k) {
    var answer = 0;
    let l = 0, r = 200000000;
    
    function canPass(mid){
        let zero = 0;
        
        for(let i=0; i<stones.length; i++){
            if(stones[i]<mid)   zero++;
            else    zero = 0;
            if(zero>=k) return false;
        }
        
        return true;
    }
    
    while(l<=r){
        const mid = Math.floor((l+r)/2);
        if(canPass(mid)){
            l = mid + 1;
            answer = mid;
        }
        else    r = mid - 1;
    }
    
    
    return answer;
}

// 이분 탐색
// 이분탐색이 성립하려면 필요한 건 “정렬된 배열”이 아니라, 단조성(모노토닉) 이야.

// 여기서 단조성은 이런 성질:
// x명이 건널 수 있으면, 그보다 적은 사람 x-1명도 항상 건널 수 있음
// x명이 건널 수 없으면, 그보다 많은 사람 x+1명도 항상 못 건넘

// 즉 canPass(x)가
// true true true ... true false false ... false
// 처럼 어떤 경계점을 기준으로 한 번만 바뀌는 형태라서, 그 경계(최대 true)를 이분탐색으로 찾을 수 있어.