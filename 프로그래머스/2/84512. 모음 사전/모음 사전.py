from itertools import product

def solution(word):
    words = []
    vowels = ['A', 'E', 'I', 'O', 'U']
    
    for length in range(1, 6):
        for p in product(vowels, repeat=length):
            words.append(''.join(p))
    
    words.sort()
    return words.index(word) + 1