#include <bits/stdc++.h>
using namespace std; 

int n, k;
int A[10001], dp[10001];
vector<int> V;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> n >> k;

    for(int i=1; i<=n;i++){
        cin >> A[i];
    }

    dp[0] = 1;

    for(int i=1; i<=n;i++){
        for(int j= A[i]; j<=k; j++){
            dp[j] =  dp[j] + dp[j-A[i]];
        }
    }


    cout << dp[k];
}