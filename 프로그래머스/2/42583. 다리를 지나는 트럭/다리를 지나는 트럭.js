function solution(bridge_length, weight, truck_weights) {
   
    let time = 0;
    let bridge = new Array(bridge_length).fill(0);
    let current_bridge = 0;
    
    while(truck_weights.length > 0 || current_bridge > 0) {
        
        time++;
        current_bridge -= bridge.shift();
        
        if(truck_weights.length > 0 ){
            if(truck_weights[0] + current_bridge <= weight){
                const temp = truck_weights.splice(0,1)[0];
                current_bridge += temp;
                bridge.push(temp);
            }else{
                bridge.push(0);
            }
        }
    }
    
    return time;
}