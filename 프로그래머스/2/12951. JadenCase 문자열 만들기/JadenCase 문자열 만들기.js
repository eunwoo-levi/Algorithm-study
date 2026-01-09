function solution(s) {
    const words = s.split(" ");
    
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    
    return words.join(" ");
    
}