from collections import Counter

def solution(nums):
    answer = 1
    pokemon = Counter(nums)    
    quantity = len(list(pokemon.keys()))
    
    half = len(nums) // 2
    
    return half if half <= quantity else quantity