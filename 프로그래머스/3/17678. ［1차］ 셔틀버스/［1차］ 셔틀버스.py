def solution(n, t, m, timetable):
    crew = sorted(to_minutes(time) for time in timetable)
    
    bus_time = 9 * 60
    idx = 0
    
    for bus in range(n):
        count = 0
        
        while idx < len(crew) and crew[idx] <= bus_time and count < m:
            idx += 1
            count += 1
        
        if bus == n - 1:
            if count < m:
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