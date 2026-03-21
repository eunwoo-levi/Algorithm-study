from collections import defaultdict

def solution(genres, plays):
    answer = []
    
    genre_kinds = defaultdict(int)
    albums = defaultdict(list)
    
    for i, g in enumerate(genres):
        genre_kinds[g] += plays[i]
        albums[g].append((i, plays[i]))
    
    genre_kinds = sorted(genre_kinds.keys(), key= lambda x: genre_kinds[x], reverse = True)
    
    for genre in genre_kinds:
        album = sorted(albums[genre], key= lambda x: (-x[1], x[0]))
        
        for idx, a in enumerate(album):
            i, album = a
            if idx > 1:
                break;
            answer.append(i)
    
    
        
    return answer