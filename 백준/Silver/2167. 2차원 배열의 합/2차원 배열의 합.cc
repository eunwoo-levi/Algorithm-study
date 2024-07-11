#include <bits/stdc++.h>
using namespace std;

int n,m,k;
int A[301][301];


int main()
{
	ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);

	cin >> n >> m;

	for(int i=1; i<=n;i++){
		for(int j=1; j<=m;j++){
			cin >> A[i][j];
		}
	}

	cin >> k;

	for(int i=0; i<k;i++){
		int x,y,x_2,y_2;
		int res=0;

		cin >> y >> x >> y_2 >> x_2;

		for(int i=y; i<=y_2;i++){
			for(int j=x; j<=x_2;j++){
				res+=A[i][j];
			}
		}

		cout << res << "\n";
	}
	
}