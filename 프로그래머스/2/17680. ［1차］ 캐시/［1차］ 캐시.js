function solution(cacheSize, cities) {
    var answer = 0;
    const cacheArr = [];
    
    if(cacheSize===0)   return 5 * cities.length;
    
    for(let i=0; i<cities.length; i++){
        const city = cities[i].toLowerCase();
        const idx = cacheArr.indexOf(city);
        //  Miss
        if(idx===-1){
            if(cacheArr.length===cacheSize) cacheArr.shift();
            answer+=5;
        }
        //  Hit
        else{
            cacheArr.splice(idx, 1);
            answer++;
        }
        cacheArr.push(city);
    }
    
    return answer;
}