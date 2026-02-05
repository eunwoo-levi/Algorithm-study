function solution(name) {
    var answer = 0;
    const len = name.length;
    
    // 위-아래 이동 횟수
    for(let i=0; i<len; i++){
        const up = name[i].charCodeAt() - 65;
        const down = 'Z'.charCodeAt() - name[i].charCodeAt() + 1;
        answer += Math.min(up, down);
    }
    
    let move = 21;
    for(let i=0; i<len; i++){
        let j = i+1;
        while(j<len && name[j] === 'A')    j++;
        // 케이스1) 오른쪽으로 i까지 갔다가 되돌아가서 끝쪽(뒤) 처리
        move = Math.min(move, 2 * i + (len-j));
        // 케이스2) 뒤쪽(끝)부터 처리하러 왼쪽으로 갔다가 다시 i쪽으로
        move = Math.min(move, 2 * (len-j) + i);
    }
    answer+= move;

    return answer;
}