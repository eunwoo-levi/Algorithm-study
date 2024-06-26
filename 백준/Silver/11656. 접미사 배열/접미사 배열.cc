#include <bits/stdc++.h>
using namespace std;

string S;
vector<string> V;

int main(){
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);

    cin >> S;

    for(int i=0; i<S.size();i++){
        V.push_back(S.substr(i));
    }

    sort(V.begin(), V.end());

    for(auto it:V){
        cout << it << "\n";
    }
}