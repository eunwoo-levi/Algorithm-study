function solution(n, words) {
    const set = new Set();
    set.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const prevWord = words[i - 1];
        const curWord = words[i];

        if (set.has(curWord) || prevWord[prevWord.length - 1] !== curWord[0]) {
            const person = i % n + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }

        set.add(curWord);
    }

    return [0, 0];
}
