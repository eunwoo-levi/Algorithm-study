function solution(n, words) {
    const set = new Set();
    if(words.length>1)  set.add(words[0]);
    
    for(let i=1; i<words.length; i++){
        const beforeWord = words[i-1];
        const word = words[i];
        
        if(set.has(word) || beforeWord[beforeWord.length-1] !== word[0]){
            return [i%n + 1, Math.floor(i/n + 1)];
        }
        
        set.add(word);
    }
    

    return [0, 0];
}