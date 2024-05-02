#include <bits/stdc++.h>
using namespace std;

int n, num;
vector<int> V;
int A[11];

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> n;

    for(int i=1;i<n;i++){
        cin >> A[i];
    }


    for(int i=n; i>=1; i--){
        V.insert(V.begin()+A[i], i);
    }

    for(auto it: V){
        cout << it << " ";
    }

    return 0;
}