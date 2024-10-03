function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    
    let d = 0; // deliveries 합산
    let p = 0; // pickups 합산
    
    for (let i = n - 1; i >= 0; i--) { // 먼 곳부터 방문 - 그리디
        d += deliveries[i];
        p += pickups[i];
        
        // 아직 배달할 물건이나 픽업할 물건이 남아있으면 반복
        while (d > 0 || p > 0) {
            d -= cap;
            p -= cap;
            answer += (i + 1) * 2; // 거리 계산
        }
    }
    return answer;
}
