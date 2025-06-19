function solution(want, number, discount) {
    var answer = 0;
    
    const map = {};
    for (let i = 0; i < want.length; i++) {
        map[want[i]] = number[i];
    }
    
    // 할인 배열을 10개씩 슬라이싱하며 검사
    for (let i = 0; i < discount.length - 9; i++) {
        // map을 복사한 products 객체로 작업
        const products = { ...map };
        const slicedDiscount = discount.slice(i, i + 10);
        
        // 10일 동안의 제품 할인 처리
        for (let j = 0; j < 10; j++) {
            if (products[slicedDiscount[j]] !== undefined) {
                products[slicedDiscount[j]]--;
            }
        }
        
        // 모든 제품이 필요한 만큼 다 할인되었는지 체크
        const res = Object.values(products).every(v => v <= 0);
        if (res) answer++;
    }
    
    return answer;
}
