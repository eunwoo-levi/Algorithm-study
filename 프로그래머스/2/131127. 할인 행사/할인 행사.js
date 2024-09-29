function solution(want, number, discount) {
    let answer = 0;
    const totalDays = 10;
    
    // 원하는 제품과 수량을 Map에 저장
    const wantMap = new Map();
    for(let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    // 10일 연속 구매 가능 여부를 확인하는 함수
    function canBuyAll(start) {
        const tempMap = new Map(wantMap);
        for(let i = start; i < start + totalDays; i++) {
            if(tempMap.has(discount[i])) {
                let count = tempMap.get(discount[i]);
                if(count === 1) tempMap.delete(discount[i]);
                else tempMap.set(discount[i], count - 1);
            }
        }
        return tempMap.size === 0;
    }
    
    // 할인 기간 동안 연속 10일씩 확인
    for(let i = 0; i <= discount.length - totalDays; i++) {
        if(canBuyAll(i)) answer++;
    }
    
    return answer;
}