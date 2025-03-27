function solution(x, y, n) {
    var answer = 0;
    
    // 1) 큐 초기값, y값을 기준으로 x값을 도달하기 위해서 초기값을 y로 잡고, 횟수 0을 세팅한다.
    var que = [[y, 0]];
    
    // 2) 큐에 값이 없을 때 까지 반복한다.
    while(que.length) {
    	// 3) 먼저 들어온 순으로 값을 가져온다. FIFO
        const [num, i] = que.shift();
        
        // 4) x값에 도달했다면 도달한 횟수를 반환한다.
        if(num === x) return i;
        
        // 5) 두번째 조건 : 2로 나누어 떨어질 때 값을 큐에 저장한다.
        if(num%2 === 0 && num/2 >= x) que.push([num/2, i+1]);
        
        // 6) 세번째 조건 : 3로 나누어 떨어질 때 값을 큐에 저장한다.
        if(num%3 === 0 && num/3 >= x) que.push([num/3, i+1]);
        
        // 7) 첫번째 조건 : n값을 빼도 x보다 크거나, 같을 경우만 큐에 저장한다.
        if(num-n >= x) que.push([num-n, i+1]);
    }
    
    // 8) while 반복문 안에서 반환 받지 못했다면 x값에 도달하지 못하므로 -1를 반환한다.
    return -1;
}