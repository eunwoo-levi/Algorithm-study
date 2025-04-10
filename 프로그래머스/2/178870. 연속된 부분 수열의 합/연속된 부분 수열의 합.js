// 투포인터(슬라이딩 윈도우)
function solution(sequence, k) {
    var res = [0,sequence.length-1];
    let left = 0, right = 0;
    let sum = sequence[0];
    
    while(right<sequence.length){
        if(sum<k){
            sum+=sequence[++right];
        }
        else if(sum>k){
            sum-=sequence[left++];
        }
        else{
            if(res[1]-res[0]>right-left){
                res = [left,right];
            }
            sum-=sequence[left++]
        }
    }
    
    return res;
}