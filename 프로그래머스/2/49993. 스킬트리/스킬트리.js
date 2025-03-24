function solution(skill, skill_trees) {
    
    return skill_trees.reduce((a,c) => {
        const sk = c.split("").filter(v => skill.includes(v)).join('')
        return sk===skill.slice(0,sk.length) ? a+1 : a
    },0)
    
}