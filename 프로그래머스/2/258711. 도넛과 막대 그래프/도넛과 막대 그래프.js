function solution(edges) {
    const degree = new Map();   // node -> [out, in]
    
    for(const [start, end] of edges){
        if(!degree.has(start))   degree.set(start, [0, 0]);
        if(!degree.has(end)) degree.set(end, [0, 0]);
        degree.get(start)[0]++;     // outDegree
        degree.get(end)[1]++;       // inDegree
        
    }
    
    let addedVertex = 0, line = 0, donut = 0, eight = 0;
    
    for(const [node , [outD, inD]] of degree){
        if(inD === 0 && outD >= 2)  addedVertex = node;
        else if(outD === 0)  line++;
        else if(inD >= 2 && outD >= 2)  eight++;
    }
    
    let totalGraphs = degree.get(addedVertex)[0];
    donut = totalGraphs - line - eight;
    
    return [addedVertex, donut, line, eight];
}

// 부분 그래프 갯수 (전체 갯수) = 정점으로 부터 Out Degree 갯수
// 막대 그래프 갯수 = Out Degree가 0인 갯수
// 8자 모양 그래프 = In Degree와 Out Degree 갯수가 각각 2개 이상

