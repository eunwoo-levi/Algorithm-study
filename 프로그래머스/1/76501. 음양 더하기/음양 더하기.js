function solution(absolutes, signs) {
    
    return absolutes.reduce((a,b,i)=> a+(b*(signs[i]?1:-1)),0)
        
}