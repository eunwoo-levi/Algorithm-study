#include <bits/stdc++.h>
using namespace std;

int n, Max,Max_Node;
int visited[100001];
vector<pair<int,int>> V[100001];

void dfs(int u, int d){
	visited[u] = 1;
	if(Max<d){
		Max = d;
		Max_Node = u;
	}

	for(int i=0; i<V[u].size(); i++){
		int w = V[u][i].first;
		int wd = V[u][i].second;
		if(!visited[w]){
			dfs(w, d+wd);
		}
	}
}

int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
	cin >> n;

	int a,b,c;
	for(int i=1; i<=n;i++){
		cin >> a;
		while(1){
			cin >> b;
			if(b==-1)	break;
			cin >> c;
			V[a].push_back({b,c});
		}
	}

	dfs(1,0); 			// 임의의 정점 1에서 시작, distance : 0
	Max = 0;
	memset(visited, 0 , sizeof(visited));
	dfs(Max_Node, 0);

	cout << Max;

	return 0;
}