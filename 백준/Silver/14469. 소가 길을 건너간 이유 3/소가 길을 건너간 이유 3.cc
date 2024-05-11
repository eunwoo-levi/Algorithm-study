#include <bits/stdc++.h>
using namespace std;

int n, Time;
vector<pair<int,int>> V;

int main(){
    cin >> n;

    for(int i=0; i<n;i++){
        int a,b;
        cin >> a >> b;
        V.push_back({a,b});
    }

    sort(V.begin(),V.end());

    for(int i=0; i<V.size();i++){
        if(Time<=V[i].first){
            Time=V[i].first;
            Time+=V[i].second;
        }
        else{
            Time+= V[i].second;
        }
    }

    cout<< Time;
}