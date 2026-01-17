function solution(n, costs) {
  // 1) 비용 기준 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 2) Union-Find 초기화: parent[i] = i
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0); // 트리 높이(대략) 관리용

  // 대표(루트) 찾기 + 경로 압축
  function find(x) {
    if (parent[x] === x) return x;
    parent[x] = find(parent[x]);
    return parent[x];
  }

  // 합치기(같은 집합이면 false, 합쳤으면 true)
  function union(a, b) {
    a = find(a);
    b = find(b);
    if (a === b) return false;

    // union by rank (트리 균형)
    if (rank[a] < rank[b]) parent[a] = b;
    else if (rank[a] > rank[b]) parent[b] = a;
    else {
      parent[b] = a;
      rank[a]++;
    }
    return true;
  }

  // 3) Kruskal: 사이클 안 만들면 채택
  let answer = 0;
  let picked = 0;

  for (const [a, b, cost] of costs) {
    if (union(a, b)) {
      answer += cost;
      picked++;
      if (picked === n - 1) break; // MST 완성
    }
  }

  return answer;
}


// Kruskal Algorithm 를 사용해야함 -> 가중치 정렬해서 싸이클 안생기는 선에서 하나씩 선택
// http://chanhuiseok.github.io/posts/algo-33/
// https://lazyhysong.tistory.com/entry/JS-Kruskal-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0