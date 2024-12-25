function solution(cacheSize, cities) {
    let res = 0;
    
    const cache = [];
    
    for(let i=0; i<cities.length; i++){
        const city = cities[i].toLowerCase()
        if(cache.includes(city)){
            res+=1
            cache.splice(cache.indexOf(city),1);
            cache.unshift(city);
        }
        
        else{
            res+=5;
            if(cacheSize===0){
                continue;
            }
            if(cache.length===cacheSize){
                cache.pop();
                cache.unshift(city);
            }
            else{
                cache.unshift(city);
            }
        }
    }
    
    return res;
}