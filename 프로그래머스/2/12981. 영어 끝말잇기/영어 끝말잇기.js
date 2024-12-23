function solution(n, words) {
    let member = 0;
    
    const word = new Set();

    for(let i=0; i<words.length; i++){
        if(i!==0 && words[i-1][words[i-1].length-1]!==words[i][0]){
            return [member+1, Math.floor(i/n)+1]
        }
        if(!word.has(words[i])){
            word.add(words[i]);
            member = Math.floor((member+1)%n)
        }

        else{
            return [member+1, Math.floor(i/n)+1]
        }
        
    }
    
    return [0,0];
    

    return res;
}