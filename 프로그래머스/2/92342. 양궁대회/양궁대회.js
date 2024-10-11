// 완전탐색+DFS: 점수 10점~0점까지 모두 돎으로써 최적의 해답을 구함

function solution(n, info) {
    let max = 0;            // 지금까지 발견한 라이언과 어피치의 최대 점수 차이
    let answer = [-1];
    let ryan = Array(11).fill(0);       

    function DFS(level,count){    //   level:현재 탐색 중인 과녁의 점수, count: 남은 화살 수
        // 종료조건
        if(level == 10){
            ryan[level] = count;   // ryan[level]: 라이언이 해당 점수에 맞힌 화살 수
            // 점수비교
            let sum = 0      // 현재 탐색 중인 전략에서 라이언과 어피치의 점수 차이
            for (let i = 0; i < 10; i++) {
                if(ryan[i] > info[i]){
                    sum += (10 - i);
                }
                
                else if(ryan[i] === info[i]){
                    continue;
                }
                
                else{
                    sum -= (10 - i);
                }      
            }

            if(sum > max){
                max = sum;
                answer = [...ryan];
            }
            
            else if(sum == max){
                // 낮은 개수를 더 맞추는 경우를 답으로 채용함
                for (let j = 10; j > 0; j--) {
                    if(answer[j] == ryan[j]){
                        continue;
                    }
                    else if(ryan[j] > answer[j]){
                        answer = [...ryan];
                        break;
                    }
                    else{
                        break;
                    }
                }
            }
        // 계속진행
        }
        
        else{

            // info[leve]: 어피치가 해당 점수에 맞힌 화살 수
            // 남은 화살개수가 없거나 + 어피차보다 많이 못맞출경우
            if(count == 0 || count <= info[level] ){
                DFS(level+1,count);
            }
            else{
                // 어피치보다 많이 맞출경우
                ryan[level] = info[level] + 1
                count -= (info[level] + 1);
                DFS(level+1,count)


                // 다른 점수로 돌릴경우
                ryan[level] = 0
                count = count + (info[level] + 1);
                DFS(level+1,count)
            }

        }


    }
    
    DFS(0,n)

    return answer;
}
