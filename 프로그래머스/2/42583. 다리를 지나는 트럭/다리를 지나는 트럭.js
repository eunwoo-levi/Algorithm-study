function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let sum = 0;
  const bridge = Array(bridge_length).fill(0); // 다리 위 각 칸의 트럭 무게(0은 빈 칸)
  let i = 0;

  while (i < truck_weights.length) {
    time += 1;
    sum -= bridge.shift(); // 한 칸 나감

    // 다음 트럭을 올릴 수 있으면 올리고, 아니면 빈 칸(0) 유지
    if (sum + truck_weights[i] <= weight) {
      bridge.push(truck_weights[i]);
      sum += truck_weights[i];
      i += 1;
    } else {
      bridge.push(0);
    }
  }

  // 마지막 트럭이 다리를 빠져나가려면 다리 길이만큼 더 필요
  return time + bridge_length;
}
