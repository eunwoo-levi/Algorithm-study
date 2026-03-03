def solution(s):
    arr = s.split(' ')
    arr = [a.lower() for a in arr]
    
    for i in range(len(arr)):
        if len(arr[i]) > 0:
            arr[i] = arr[i][0].upper() + arr[i][1:]
        
    print(arr)
    
    return ' '.join(arr)