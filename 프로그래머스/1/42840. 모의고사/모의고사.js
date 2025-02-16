function solution(answers) {
    const answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let res_1 = 0, res_2 = 0, res_3 = 0;
    const first_len = first.length;
    const second_len = second.length;
    const third_len = third.length;
    
    for (let i = 0; i < answers.length; i++) {
        if (first[i % first_len] === answers[i]) res_1++;
        if (second[i % second_len] === answers[i]) res_2++;
        if (third[i % third_len] === answers[i]) res_3++;
    }
    
    const max_res = Math.max(res_1, res_2, res_3);
    
    [res_1, res_2, res_3].forEach((res, idx) => {
        if (res === max_res) {
            answer.push(idx + 1);
        }
    });
    
    return answer.sort((a, b) => a - b);
}
