function solution(survey, choices) {
    var answer = '';
    
    const map = new Map();
    map.set('RT', {'R': 0, 'T': 0}); map.set('CF', {'C': 0, 'F': 0}); map.set('JM', {'J': 0, 'M': 0}); map.set('AN', {'A': 0, 'N': 0});
    
    for(let i=0; i<survey.length; i++){
        const type = survey[i].split('').sort().join('');
        const choice = choices[i];
        
        const obj = map.get(type);
        
        let first = type[0];
        let second = type[1];
        if(type[0] !== survey[i][0]) [first, second] = [second, first];
        
        if(choice<4)    obj[first] += 4-choice;
        else if(choice>4)   obj[second] += choice-4;
    }
    
    for(const [key, value] of map){
        const first = key[0];
        const second = key[1];
        
        if(value[first]>value[second]) answer+=first;
        else if(value[first]<value[second]) answer+=second;
        else    answer+=first;
    }
    
    console.log(map)
    
    return answer;
}