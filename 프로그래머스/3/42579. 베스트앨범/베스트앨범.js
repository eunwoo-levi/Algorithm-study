function solution(genres, plays) {
    var answer = [];
    
    const genreMap = new Map();
    
    for(let i=0; i<genres.length; i++){
        genreMap.set(genres[i], {total: 0, songs: []});
    }  
    
    for(let i=0; i<genres.length; i++){
        const g = genreMap.get(genres[i]);
        if(!g){
            genreMap.set(genres[i], {total: plays[i], songs: [{id: i, play: plays[i]}]});
        }
        
        else{
            g.total += plays[i];
            g.songs.push({id: i, play: plays[i]});
        }
    }
    
    const genreArr = [...genreMap].sort((a,b)=>b[1].total - a[1].total)
    
    genreArr.forEach((genre, idx)=>{
        genre[1].songs.sort((a,b)=> b.play - a.play)
        
        genre[1].songs.forEach((s,idx)=>{
            if(idx<2){
                answer.push(s.id);
            }
        })

    })
    
    return answer;
}