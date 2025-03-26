function solution(order) {
    let stack = [];
    let answer = 0;
    let i = 0; // order의 인덱스

    for (let box = 1; box <= order.length; box++) {
        if (box === order[i]) {
            answer++;
            i++;
        } else {
            stack.push(box);
        }

        while (stack.length > 0 && stack[stack.length - 1] === order[i]) {
            stack.pop();
            answer++;
            i++;
        }
    }

    return answer;
}
