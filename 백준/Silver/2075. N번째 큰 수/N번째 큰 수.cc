#include <bits/stdc++.h>
using namespace std;

int n;

priority_queue<long long, vector<long long>, greater<long long>> Q;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> n;

    for(int i=0; i<n;i++){
        for(int j=0; j<n;j++){
            long long tmp;
            cin >> tmp;
            Q.push(tmp);

            if(Q.size() > n) Q.pop();
        }
    }

    cout << Q.top();
}