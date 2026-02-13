// 뒤에서 부터 세야 함
// 만약 배달 할게 있거나 수거할거 있으면 계산하자
// 둘 중에 한 개라도 갔다왔는데 더 있으면 또 갔다와야함
// 거리는 * 2 하기
function solution(cap, n, deliveries, pickups) {
    var answer = 0;

    let d = 0, p = 0;
    
    for(let i=n-1; i>=0; i--){
        d += deliveries[i];
        p += pickups[i];
        
        while(d>0 || p>0){
            d -= cap;
            p -= cap;
            answer += (i+1) * 2;
        }
    }
    
    return answer;
}