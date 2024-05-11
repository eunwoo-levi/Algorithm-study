#include <bits/stdc++.h>
using namespace std;

int n, res;
vector<pair<int,int>> V;
priority_queue<int, vector<int>, greater<int>> pq;

int main(){
    cin >> n;

    for(int i=0; i<n;i++){
        int a,b;
        cin >> a >> b;
        V.push_back({a,b});
    }

    sort(V.begin(), V.end());

    for(int i=0; i<V.size();i++){
        pq.push(V[i].second);
        if(pq.size()>V[i].first){
            pq.pop();
        }
    }

    while(!pq.empty()){
        res+=pq.top();
        pq.pop();
    }

    cout << res;
}