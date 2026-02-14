function solution(friends, gifts) {
    const map = new Map();
    const n = friends.length;
    
    // 이름 → 인덱스
    const index = new Map();
    friends.forEach((f, i) => index.set(f, i));
    
    // A -> B 횟수 저장
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    // 기본 정보 세팅
    for (const friend of friends) {
        map.set(friend, { give: 0, get: 0, points: 0, nextGet: 0 });
    }
    
    // 선물 기록
    for (const gift of gifts) {
        const [give, get] = gift.split(' ');
        
        const giveObj = map.get(give);
        const getObj = map.get(get);
        
        giveObj.give++;
        getObj.get++;
        
        arr[index.get(give)][index.get(get)]++;
    }
    
    // 선물 지수 계산
    for (const friend of friends) {
        const obj = map.get(friend);
        obj.points = obj.give - obj.get;
    }
    
    // 🔥 모든 친구 쌍 비교
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const A = friends[i];
            const B = friends[j];
            
            const AtoB = arr[i][j];
            const BtoA = arr[j][i];
            
            const Aobj = map.get(A);
            const Bobj = map.get(B);
            
            if (AtoB > BtoA) {
                Aobj.nextGet++;
            } 
            else if (AtoB < BtoA) {
                Bobj.nextGet++;
            } 
            else {
                if (Aobj.points > Bobj.points) Aobj.nextGet++;
                else if (Aobj.points < Bobj.points) Bobj.nextGet++;
            }
        }
    }
    
    let max = 0;
    for (const { nextGet } of map.values()) {
        max = Math.max(max, nextGet);
    }
    
    return max;
}
