// backtracking
#include <bits/stdc++.h>
using namespace std;

int n;
int check[10];
char A[20];
vector<string> V;

bool good(char x, char y, char op){ 
	if(op == '<' && x < y) return true; 
	if(op == '>' && x > y) return true; 
	return false; 
}

void solve(int idx, string num){ 
	if(idx == n + 1){
		
		V.push_back(num); return;
	}
	for(int i = 0; i <= 9; i++){
		if(check[i]) continue; 
		if(idx == 0 || good(num[idx - 1], i + '0', A[idx - 1])){
			check[i] = 1;
			solve(idx + 1, num + to_string(i));
			check[i] = 0;
		}
	}
	return;
}

int main(){
    ios::sync_with_stdio(0); cin.tie(0);

    cin >> n;

    for(int i=0; i<n;i++)   cin >> A[i];

    solve(0, "");

    sort(V.begin(),V.end());

    cout << V.back() << "\n" << V[0];

    return 0;
}
