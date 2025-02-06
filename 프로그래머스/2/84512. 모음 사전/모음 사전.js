let idx = 0;
const vowels = ['A', 'E', 'I', 'O', 'U']
const res = {}

function solution(word) {
    dfs('', 0)
    return res[word]
}

function dfs(word, length){
    if(length>5)    return;
    res[word] = idx++;
    
    for(let i=0; i<vowels.length; i++){
        dfs(word+vowels[i], length+1)
    }
}
