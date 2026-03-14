from collections import deque

def solution(bridge_length, weight, truck_weights):
    time = 0
    total = 0
    index = 0
    bridge = deque([0] * bridge_length)

    while index < len(truck_weights) or total > 0:
        time += 1
        total -= bridge.popleft()

        if index < len(truck_weights) and total + truck_weights[index] <= weight:
            bridge.append(truck_weights[index])
            total += truck_weights[index]
            index += 1
        else:
            bridge.append(0)

    return time