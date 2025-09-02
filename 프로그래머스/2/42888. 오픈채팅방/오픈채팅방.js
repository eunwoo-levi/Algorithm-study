function solution(record) {
    const result = [];
    const userMap = {}; // userId -> nickname

    // 1. 유저 아이디별 닉네임 최신화
    record.forEach(r => {
        const [type, uid, name] = r.split(" ");
        if (type === "Enter" || type === "Change") {
            userMap[uid] = name;
        }
    });

    // 2. 메시지 만들기
    record.forEach(r => {
        const [type, uid] = r.split(" ");
        if (type === "Enter") {
            result.push(`${userMap[uid]}님이 들어왔습니다.`);
        } else if (type === "Leave") {
            result.push(`${userMap[uid]}님이 나갔습니다.`);
        }
    });

    return result;
}