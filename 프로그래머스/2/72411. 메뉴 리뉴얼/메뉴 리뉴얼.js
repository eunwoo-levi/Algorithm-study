// map: { key: order, value: order 겹치는 갯수 }
// maxMap: { key: 각 길이 - course , value: 각 길이에 따른 최댓값}

function solution(orders, course) {
    var answer = [];
    const map = new Map();
    const maxMap = new Map();
    
    orders = orders.map(order=>order.split('').sort().join(''));
    
    for(const order of orders){
        for(const len of course){
            const combi = combination(order, len);
            
            for(const c of combi){
                map.set(c, (map.get(c) || 0) + 1);                 
            }
        }
    }
    
    // 각 길이(key.length)마다 최댓값 담은 Map
    for(const [key, value] of map){
        const len = key.length;
        if(!maxMap.get(len)) maxMap.set(len, 0);
        if(maxMap.get(len) < value){
            if(value<2) continue;
            maxMap.set(len, value);
        }
    }
    
    for(const [key, value] of map){
        const len = key.length;
        if(maxMap.get(len)===value) answer.push(key);
    }
    
    answer.sort();
    
    return answer;
}

function combination(array, len){
    const result = [];
    function dfs(start, cur){
        if(cur.length===len){
            result.push(cur)
            return;
        }

        for(let i=start; i<array.length; i++){
            dfs(i + 1, cur + array[i]);
        }
    }

    dfs(0, '');
    return result;
}