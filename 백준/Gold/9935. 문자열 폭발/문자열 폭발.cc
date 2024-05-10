#include <bits/stdc++.h>
using namespace std;

int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
	string res="";
	string A,B;

	cin >> A >> B;

	for(int i=0; i<A.size();i++){
		res+= A[i];
		if(res.size()>=B.size() && res.substr(res.size()-B.size(),B.size())==B){
			res.erase(res.end()-B.size(), res.end());
		}
	}

	if(!res.size()) cout << "FRULA" << "\n";
	else cout << res << "\n";
	return 0;
}