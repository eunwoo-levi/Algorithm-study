// 1달 = 28일
// 1년 = 28 * 12 일

function solution(today, terms, privacies) {
    var answer = [];
    const types = new Map();
    
    const todayDays = convertToDays(today)
    
    // 1) terms에 있는거 map에 하나씩 넣기.
    for(const term of terms){
        const [type, month] = term.split(' ');
        types.set(type, month);
    }
    // 2) privacy 하나씩 검사.
    for(let i=0; i < privacies.length; i++){
        const [date, type] = privacies[i].split(' ');
        const termMonth = types.get(type);
        
        const privacyDays = convertToDays(date)
        
        console.log('@',termMonth*28)
        console.log(todayDays-privacyDays)
        
        if(termMonth*28 <= todayDays-privacyDays){
            answer.push(i+1);
        }
    }
    
    return answer;
}

function convertToDays(date){
    const [year, month, day] = date.split('.').map(Number);
    return year * 28 * 12 + month * 28 + day;
}