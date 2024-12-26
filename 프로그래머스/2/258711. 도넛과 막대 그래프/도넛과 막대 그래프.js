function solution(edges) {
    const map = {}

    // 1차원으로 각 노드의 출발 차수와 도착 차수를 한 번에 계산
    for (const [start, end] of edges) {
        if (!map[start]) map[start] = [0, 0];
        if (!map[end]) map[end] = [0, 0];
        
        map[start][0]++;  // 출발 차수 증가
        map[end][1]++;    // 도착 차수 증가
    }

    let addedNode = 0;
    let donutGraph = 0;
    let lineGraph = 0;
    let eightGraph = 0;

    // 한 번만 순회하면서 결과 계산
    for (const [start, [given, received]] of Object.entries(map)) {
        if (given > 1 && received === 0) {
            addedNode = start; // addedNode 찾기
        } else if (given === 0) {
            lineGraph++;  // 선이 끝나는 노드 카운트
        } else if (given > 1 && received > 1) {
            eightGraph++; // 팔 모양 노드 카운트
        }
    }

    // 도넛 노드 계산
    donutGraph = map[addedNode][0] - lineGraph - eightGraph;

    return [Number(addedNode), donutGraph, lineGraph, eightGraph];
}
