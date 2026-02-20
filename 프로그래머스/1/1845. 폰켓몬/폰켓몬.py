from collections import Counter

def solution(nums):
    numLen = len(nums)/2
    
    keys = Counter(nums).keys()
    keyLen = len(keys)
    
    if keyLen >= numLen:
        return numLen
    else:
        return keyLen
    
    return answer