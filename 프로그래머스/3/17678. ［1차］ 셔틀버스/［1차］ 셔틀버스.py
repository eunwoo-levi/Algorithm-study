# 09:00시부터 t분 간격으로 n번 셔틀
# 매번 버스 올 때마다 m명씩 태움
# 만약 꽉차면 제일 마지막 버스에서 다른 사람보다 1분 일찍.
# timetable에 있는 모든 사람이 다 안타도 상관이없다. -> 매번 도착하는 버스에 "나"가 인원수 안에 먼저 타면 됌

def solution(n, t, m, timetable):
    answer = 0
    crew = sorted(to_minutes(time) for time in timetable)

    bus_time = 9 * 60
    idx = 0
    
    for bus in range(n):
        count_crew = 0
        while idx < len(timetable) and count_crew < m and crew[idx] <= bus_time:
            count_crew += 1
            idx += 1
            
        if bus == n-1:
            if count_crew < m:
                answer = bus_time
            else:
                answer = crew[idx - 1] - 1 
        
        bus_time += t
        
    return to_hours(answer)

def to_minutes(time_string):
    hour, minute = map(int, time_string.split(':'))
    return hour * 60 + minute

def to_hours(minutes):
    hour = minutes // 60
    minute = minutes % 60
    return f"{hour:02d}:{minute:02d}"