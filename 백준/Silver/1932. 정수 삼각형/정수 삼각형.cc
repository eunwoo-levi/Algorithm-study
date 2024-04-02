#include <bits/stdc++.h>
using namespace std;

int n, res=-1;
int dp[504][504];

int main(){
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);

    cin >> n;

    for(int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
            cin >> dp[i][j];
        }
    }

    for(int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
            if(j==0)    dp[i][j] += dp[i-1][0];
            else if(j==i)    dp[i][j] += dp[i-1][j-1];
            else dp[i][j] += max(dp[i-1][j-1], dp[i-1][j]);

            res = max(res, dp[i][j]);
        }
    }

    cout << res << "\n";

    return 0;
}