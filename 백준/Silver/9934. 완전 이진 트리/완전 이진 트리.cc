#include <bits/stdc++.h>
using namespace std;

int k, A[1030];	
vector<int> res[11];

void solve(int s, int e, int level){
	if(s>e)	return;
	
	if(s==e){
		res[level].push_back(A[s]);
		return;
	}

	int mid = (s+e)/2;
	res[level].push_back(A[mid]);
	solve(s,mid - 1,level+1);
	solve(mid + 1,e,level+1);
	return;
	

}

int main(){
    ios::sync_with_stdio(0); cin.tie(0);

	cin >> k; 	// k : 빌딩 높이

	for(int i=0; i<pow(2,k)-1 ; i++){
		cin >> A[i];
	}

	solve(0, pow(2,k) - 1, 1);
    
	for(int i=1; i<=k;i++){
		for(int j : res[i]){		// == auto j
			cout << j << " ";
		}
		cout << "\n";
	}

    return 0;
}
