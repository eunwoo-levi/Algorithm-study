#include <bits/stdc++.h>
using namespace std;

int n,tmp;
vector<int> V;

int main(){
	ios::sync_with_stdio(0); cin.tie(0);

	cin >> n;

	for(int i=0; i<n;i++){
		cin >> tmp;
		V.push_back(tmp);
	}

	sort(V.begin(), V.end());

	int res = 0;
	for(int i=1; i<=n; i++){
		res = max(res, V[n-i] * i);
	}

	cout << res;
}
