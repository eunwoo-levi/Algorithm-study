// 1) 손님마다 고른 메뉴 조합들을 Combination써서 각 length만큼정 갯수 다 뽑음
// 2) 뽑은 것들을 Map key로 두고 value값들을 하나씩 올림
// 3) map을 순회하면서 key의 length만큼 분리하고
// 3-2) 각 length에 해당되는 것들 중 value의 Math.max를 구한 뒤, 해당되는 것들을 answer에 차례대로 push함.
function solution(orders, course) {
    const answer = [];
    const map = new Map();

    orders = orders.map(order =>
        order.split('').sort().join('')
    );

    for (const order of orders) {
        for (const len of course) {
            if (order.length < len) continue;

            const combs = combination(order, len);

            for (const c of combs) {
                map.set(c, (map.get(c) || 0) + 1);
            }
        }
    }

    for (const len of course) {
        let max = 0;

        for (const [key, value] of map) {
            if (key.length === len && value >= 2) {
                max = Math.max(max, value);
            }
        }

        for (const [key, value] of map) {
            if (key.length === len && value === max && value >= 2) {
                answer.push(key);
            }
        }
    }

    
    function combination(order, len){
        const result = [];

        function dfs(start, cur){
            if(cur.length===len){
                result.push(cur);
                return;
            }
            
            for(let i=start; i<order.length; i++){
                dfs(i+1, cur+order[i]);
            }
        }
        
        dfs(0, '');
        return result;
    }

    return answer.sort();
}



