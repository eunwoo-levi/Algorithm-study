#include <bits/stdc++.h>
using namespace std;

int n;
priority_queue<int, vector<int>, greater<int>> Q;

int main(){
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
    cin >> n;

    for(int i=0; i<n;i++){
        int k;
        cin >> k;
        if(k==0){
            if(Q.empty())   cout <<"0\n";

            else{
                cout << Q.top() << "\n";
                Q.pop();
            }
        }

        else{
            Q.push(k);
        }
    }

    return 0;
}