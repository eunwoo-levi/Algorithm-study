function solution(genres, plays) {
    var answer = [];
    const N = genres.length;
    const albumsMap = new Map();
    
    for(let i=0; i<N; i++){
        if(!albumsMap.get(genres[i])){
            albumsMap.set(genres[i], {total: 0, songs: []});
        }
        const album = albumsMap.get(genres[i]);
                       
        album.total += plays[i];
        album.songs.push({index: i, play: plays[i]});
    }
    
    const albums = [...albumsMap.entries()]
    albums.sort((a,b)=>{
        return b[1].total - a[1].total
    })
    
    
    for(const album of albums){
        album[1].songs.sort((a,b)=>{
            if(b.play===a.play) return a.index - b.index;
            return b.play - a.play;
        })
        
        answer.push(album[1].songs[0].index)
        if (album[1].songs.length > 1) answer.push(album[1].songs[1].index);
    }
    
    return answer;
}