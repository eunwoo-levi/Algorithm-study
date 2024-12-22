function gcd(a,b){
    if(a<b){
        let tmp = b;
        b = a;
        a = tmp; 
    }
    while(b!=0){
        let tmp = b;
        b = a%b;
        a = tmp;
    }
    
    return a;
}

function lcm(a,b){
    return (a*b) / gcd(a,b)
}

function solution(arr) {
    let Lsm = arr[0]
    for(let i=1; i<arr.length; i++){
        Lsm = lcm(Lsm, arr[i])
    }
    
    return Lsm;
}