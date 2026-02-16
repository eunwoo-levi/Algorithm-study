// banned_id별 후보 목록 만들기
// DFS로 하나씩 배정
// 결과는 Set으로 중복 제거

function solution(user_id, banned_id) {
    const result = new Set();

    // 후보를 "인덱스"로 저장
    const candidates = banned_id.map(ban => {
        const arr = [];
        for (let i = 0; i < user_id.length; i++) {
            if (isMatching(user_id[i], ban)) {
                arr.push(i);
            }
        }
        return arr;
    });

    const visited = Array(user_id.length).fill(false);

    function dfs(depth, selected) {
        if (depth === banned_id.length) {
            const sorted = [...selected].sort((a, b) => a - b).join(',');
            result.add(sorted);
            return;
        }

        for (let i = 0; i < candidates[depth].length; i++) {
            const userIdx = candidates[depth][i];

            if (visited[userIdx]) continue;

            visited[userIdx] = true;
            selected.push(userIdx);

            dfs(depth + 1, selected);

            selected.pop();
            visited[userIdx] = false;
        }
    }

    dfs(0, []);
    return result.size;
}

function isMatching(user, ban) {
    if (user.length !== ban.length) return false;

    for (let i = 0; i < ban.length; i++) {
        if (ban[i] === '*') continue;
        if (user[i] !== ban[i]) return false;
    }

    return true;
}
