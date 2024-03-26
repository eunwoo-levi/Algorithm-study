#include <bits/stdc++.h>
using namespace std;

int res;
int A[11];

int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

	int n,k;

	cin >> n >> k;

	for(int i=0; i<n;i++)	cin >> A[i];
	
	for(int i=n-1; i>=0;i--){
		res += k/A[i];
		k %= A[i];
	}


	cout << res;
}