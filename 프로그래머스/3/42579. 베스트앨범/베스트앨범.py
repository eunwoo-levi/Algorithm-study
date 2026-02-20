from collections import defaultdict

def solution(genres, plays):
    # 1. 장르별 총 재생수
    genre_total = defaultdict(int)
    
    # 2. 장르별 노래 정보 저장
    genre_songs = defaultdict(list)
    
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        
        genre_total[genre] += play
        genre_songs[genre].append((play, i))  # (재생수, 고유번호)
    
    # 3. 장르를 총 재생수 기준으로 정렬
    sorted_genres = sorted(genre_total.keys(),
                           key=lambda x: genre_total[x],
                           reverse=True)
    
    result = []
    
    # 4. 각 장르에서 노래 2개씩 선택
    for genre in sorted_genres:
        # 재생수 내림차순, 고유번호 오름차순
        songs = sorted(genre_songs[genre],
                       key=lambda x: (-x[0], x[1]))
        
        result.append(songs[0][1])
        if len(songs) > 1:
            result.append(songs[1][1])
    
    return result