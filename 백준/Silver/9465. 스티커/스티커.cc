#include <bits/stdc++.h>
using namespace std;

int t, n;
int A[2][100001], dp[2][100001];

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> t;

    while(t-->0){   
        cin >> n;

        for(int j=1;j<=n;j++){
            cin >> A[0][j];
        }

        for(int j=1;j<=n;j++){
            cin >> A[1][j];
        }

        dp[0][0] = dp[1][0] = 0;
        dp[0][1] = A[0][1];       dp[1][1] = A[1][1];

        for(int j=2;j<=n;j++){
        dp[0][j] = max(dp[1][j-1], dp[1][j-2]) + A[0][j];
        dp[1][j] = max(dp[0][j-1], dp[0][j-2]) + A[1][j];
        }

        cout << max( dp[0][n], dp[1][n] ) << "\n";

        memset(dp, 0, sizeof(dp));
    }




    return 0;
}