from collections import Counter

def solution(nums):
    answer = 0
    
    pokemon = Counter(nums)
    
    if len(pokemon) >= len(nums) // 2:
        return len(nums) // 2
    
    return len(pokemon)