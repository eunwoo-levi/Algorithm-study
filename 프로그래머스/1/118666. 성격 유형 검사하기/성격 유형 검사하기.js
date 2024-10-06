function solution(survey, choices) {
    const types = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };
    
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i].split('');
        const score = choices[i] - 4;
        
        if (score < 0) {
            types[disagree] -= score;
        } else if (score > 0) {
            types[agree] += score;
        }
    }
    
    const result = [
        types['R'] >= types['T'] ? 'R' : 'T',
        types['C'] >= types['F'] ? 'C' : 'F',
        types['J'] >= types['M'] ? 'J' : 'M',
        types['A'] >= types['N'] ? 'A' : 'N'
    ];
    
    return result.join('');
}