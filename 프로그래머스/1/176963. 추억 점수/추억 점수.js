function solution(name, yearning, photo) {
    const res = []
    const map = new Map()
    
    for(let i=0; i<name.length;i++){
        map.set(name[i], yearning[i])
    }
    
    for(const pics of photo){
        let points = 0;
        pics.forEach((pic)=>{
            if(map.has(pic)){
                points+=map.get(pic)
            }
        })
        res.push(points)
    }
    
    return res;
}