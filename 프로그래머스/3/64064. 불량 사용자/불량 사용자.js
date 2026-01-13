// DFS + 조합
function solution(user_id, banned_id) {
  // 패턴 매칭 함수: 길이 같고, *는 와일드카드(1글자)
  const match = (user, ban) => {
    if (user.length !== ban.length) return false;
    for (let i = 0; i < ban.length; i++) {
      if (ban[i] === '*') continue;
      if (ban[i] !== user[i]) return false;
    }
    return true;
  };

  // banned별 후보 목록 만들기
  const candidates = banned_id.map(ban =>
    user_id.filter(user => match(user, ban))
  );

  const results = new Set();

  const dfs = (idx, used) => {
    if (idx === candidates.length) {
      // used는 Set이므로 정렬해서 "조합"을 고유하게 저장
      const key = [...used].sort().join(',');
      results.add(key);
      return;
    }

    for (const user of candidates[idx]) {
      if (used.has(user)) continue;
      used.add(user);
      dfs(idx + 1, used);
      used.delete(user);
    }
  };

  dfs(0, new Set());
  return results.size;
}
