def solution(numbers):
    numbers = list(map(str, numbers))
    numbers.sort(key=lambda x: x*3, reverse=True)
    result = ''.join(numbers)
    return "0" if result[0] == "0" else result