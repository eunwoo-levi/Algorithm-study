#include<bits/stdc++.h>
using namespace std;

int n, res=1;
vector<pair<int,int>> V;
pair<int,int> Prev;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> n;

    for(int i=0; i<n;i++){
        int a,b;
        cin >> a >> b;
        V.push_back({b,a});
    }

    sort(V.begin(), V.end());

    Prev = V[0];

    for(int i=1; i<n;i++){
        if(V[i].second>= Prev.first){
            Prev= V[i];
            res++;
        }
    }

    cout << res;
}