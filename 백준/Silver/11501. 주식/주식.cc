#include <bits/stdc++.h>
using namespace std;

int A[1000004];
int t, n;

int main(){
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);

    cin >> t;

    for(int i=0; i<t;i++){
        long long res = 0;
        int MAX = -1;

        cin >> n;
        for(int i=0; i<n;i++)   cin >> A[i];

        for(int i=n-1;i>=0;i--){
            if(A[i]>MAX)    MAX = A[i];
            else    res+= MAX-A[i];
        }

        cout << res << "\n";
    }



}