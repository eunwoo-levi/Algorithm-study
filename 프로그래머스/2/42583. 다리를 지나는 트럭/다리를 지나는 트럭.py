from collections import deque

def solution(bridge_length, weight, truck_weights):
    time = 0
    total = 0
    bridge = deque([0] * bridge_length)  # 다리 길이만큼 0으로 초기화
    trucks = deque(truck_weights)

    while bridge:
        time += 1
        
        # 1. 다리에서 하나 빠짐
        total -= bridge.popleft()
        
        if trucks:
            # 2. 다음 트럭을 올릴 수 있으면
            if total + trucks[0] <= weight:
                truck = trucks.popleft()
                bridge.append(truck)
                total += truck
            else:
                bridge.append(0)
        
        # 3. 트럭도 없고 다리도 비면 종료
        if not trucks and total == 0:
            break

    return time