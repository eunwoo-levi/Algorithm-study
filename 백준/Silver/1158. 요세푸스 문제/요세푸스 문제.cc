#include <bits/stdc++.h>
using namespace std;

int n,k;
vector<int> V;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> n >>k;

    for(int i=1; i<=n;i++){
        V.push_back(i);
    }

    cout << "<";

    int idx=0;
    while(V.size()>1){
        idx = (idx+k-1) % V.size();
        cout << V[idx] <<", ";
        V.erase(V.begin()+idx);
    }

    cout << V.front() << ">";


    return 0;
}