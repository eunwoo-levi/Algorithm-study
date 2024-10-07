function solution(today, terms, privacies) {
    var answer = [];
    
    let obj = {};
    
    terms.forEach((term) => {
        const [a, b] = term.split(" ")
        obj[a] = +b;
    })
    
    let count = 1;
    
    const [ty, tm, td] = today.split(".").map(Number);
    
    const tdays = ty * 12 * 28 + tm * 28 + td;
    
    privacies.forEach((p) => {
        const [date, term] = p.split(" ")
        
        const [y, m, d] = date.split(".").map(Number);
        
        const days = y * 12 * 28 + m * 28 + d + obj[term] * 28 - 1;
        
        if (tdays > days) {
            answer.push(count)
        }
        
        count++;
    })
    
    return answer;
}