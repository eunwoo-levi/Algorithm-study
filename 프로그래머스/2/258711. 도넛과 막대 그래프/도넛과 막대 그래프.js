function solution(edges) {    
    const graphInfo = {}

    edges.forEach(([send,receive])=>{
        graphInfo[send] ||= { sendCount:0, receiveCount:0 }
        graphInfo[receive] ||= { sendCount:0, receiveCount:0 }

        graphInfo[send].sendCount++
        graphInfo[receive].receiveCount++
    })

    let createVertex = 0
    let cnt = 0
    let donut = 0 
    let bar = 0 
    let eightChar = 0

    for (let vertex in graphInfo){
        const { sendCount, receiveCount } = graphInfo[vertex]
        if(sendCount >= 2 && receiveCount === 0){
            createVertex = +vertex
            cnt = sendCount
        }
        if(sendCount == 0) bar++
        if(sendCount >= 2 && receiveCount >= 2) eightChar++
    }

    donut = cnt - eightChar - bar

    return [createVertex, donut, bar, eightChar];
}