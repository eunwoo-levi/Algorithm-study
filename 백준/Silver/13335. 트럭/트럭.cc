#include <bits/stdc++.h>
using namespace std;

queue<int> truck, bridge;
int n, res, length, weight, weightSum;


int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> n >> length >> weight;

    for(int i=0;i<n; i++){
        int tmp;
        cin >> tmp;
        truck.push(tmp);
    }

    while(!truck.empty()){
        if(bridge.size()>=length){
            weightSum -= bridge.front();
            bridge.pop();
        }

        if(weightSum+truck.front() <= weight){
            bridge.push(truck.front());
            weightSum+=truck.front();
            truck.pop();
        }

        else{
            bridge.push(0);
        }
        res++;
    }
    
    cout<< res + length;
}