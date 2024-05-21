#include <bits/stdc++.h>
using namespace std;

int n, res=1000000001;
vector<pair<int,int>> V;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> n;
    for(int i=0; i<n;i++){
        int a,b;
        cin >> a >> b;
        V.push_back({a,b});
    }

    for(int i=1;i<(1<<n);i++){
        int a=1, b=0;

        for(int x=0;x<n; x++){
            if(i & (1<<x)){
                a*=V[x].first;
                b+=V[x].second;
            }
        }
        res = min(res, abs(a-b));
    }

    cout << res;
}