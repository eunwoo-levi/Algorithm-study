#include <bits/stdc++.h>
using namespace std;

int n,A[51], B[51], res;

int main(){
	ios::sync_with_stdio(0); cin.tie(0);

	cin >> n;

	for(int i=0; i<n;i++){
		cin >> A[i];
	}

		for(int i=0; i<n;i++){
		cin >> B[i];
	}

	sort(A, A+n);
	sort(B, B+n, greater<int>());

	for(int i=0; i<n;i++){
		res += A[i]*B[i];
	}

	cout<< res;
	
	return 0;
}
