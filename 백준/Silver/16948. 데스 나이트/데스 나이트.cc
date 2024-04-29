#include <bits/stdc++.h>
using namespace std;

int n;
int a,b,c,d;
int A[204][204];
int visited[204][204];
int dy[] = {-2,-2,0,0,2,2}, dx[] = {-1,1,-2,2,-1,1};

void bfs(int y, int x){
	queue<pair<int,int>> Q;
	Q.push({y,x});
	visited[y][x] = 1;

	while(!Q.empty()){
		tie(y,x) = Q.front();
		Q.pop();

		for(int i=0; i<6;i++){
			int ny = y + dy[i];
			int nx = x + dx[i];

			if(ny<0 || nx<0 || ny>= n || nx >= n ) continue;
			if(visited[ny][nx])	continue;
			
			visited[ny][nx] = visited[y][x] + 1;
			
			if(ny==c && nx == d){
				cout << visited[c][d] - 1;
				return;
			}

			Q.push({ny,nx});
		}
	}

	cout << "-1\n";
	return;

}

int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);


	cin >> n;
	cin >> a >> b >> c >> d;

	bfs(a,b);

	return 0;
}