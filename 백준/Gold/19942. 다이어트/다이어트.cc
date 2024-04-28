#include <bits/stdc++.h>
using namespace std;

#define INF 987654321

int n, mp, mf, mc, mv;
int b,c,d,e, res = INF, sum;

struct A{
	int mp, mf, mc, mv, cost;
}a[16];

map<int, vector<vector<int>>> res_v;

int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

	cin >> n;
	cin >> mp >> mf >> mc >> mv;

	for(int i=0; i<n;i++){
		cin >> a[i].mp >> a[i].mf >> a[i].mc >> a[i].mv >> a[i].cost;
	}

	for(int i=1; i < (1 << n); i++){
		b=c=d=e=sum = 0;
		vector<int> v;
		
		for(int j=0; j<n; j++){
			if(i & (1<<j)){
				v.push_back(j+1);
				b +=a[j].mp;
				c +=a[j].mf;
				d +=a[j].mc;
				e +=a[j].mv;
				sum +=a[j].cost;
			}
		}
		
		if(b>=mp && c >= mf && d>=mc && e>=mv){
			if(res>=sum){
				res = sum;
				res_v[res].push_back(v);
			}
		}
	}

	if(res == INF)	cout << -1 << "\n";
	else{
		sort(res_v[res].begin(), res_v[res].end());
		cout << res << "\n";
		for(int a: res_v[res][0]){
			cout << a << " ";
		}
	}

	return 0;
}