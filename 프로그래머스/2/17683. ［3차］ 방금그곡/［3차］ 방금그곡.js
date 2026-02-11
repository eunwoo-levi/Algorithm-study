// # <- 이 녀석을 어떻게 할지 문제
// => note에서 하나씩 for문 순회하면서 #을 만날때는 소문자로 바꾸고 (char 길이 하나로 해야 함)

function solution(m, musicinfos) {
    const answer = [];
    m = convertStringNote(m);
    
    for(const info of musicinfos){
        const [sTime, eTime, title, note] = info.split(',');
        
        const minutes = getMinutes(sTime, eTime);
        const convertedNote = convertStringNote(note);
        
        const totalNote = [];
        for(let i=0; i < minutes; i++){
            totalNote.push(convertedNote[i%convertedNote.length]);
        }
        
        
        const totalNoteString = totalNote.join('');
        if(totalNoteString.includes(m))    answer.push([minutes,title]);
    }
    
    answer.sort((a,b)=> b[0] - a[0]);
    
    return answer.length === 0 ? '(None)' : answer[0][1];
}

function convertStringNote(s){
    const note = [];
    for(let i=0; i<s.length; i++){
        if(s[i+1]==='#'){
            note.push(s[i].toLowerCase());
            i++
        }
        else    note.push(s[i]);
    }
    
    return note.join('');
}

function getMinutes(sTime, eTime) {
    const [hourA, minuteA] = sTime.split(':').map(Number);
    const [hourB, minuteB] = eTime.split(':').map(Number);
    
    return (hourB * 60 + minuteB) - (hourA * 60 + minuteA);
}