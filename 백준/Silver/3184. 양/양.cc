#include <bits/stdc++.h>
using namespace std;

int r,c, sheep, wolf;
char A[254][254];
int visited[254][254];
int dy[] = {1,0,-1,0}, dx[] = {0,1,0,-1};

void bfs(int y, int x){
	int o=0, v=0;
	queue<pair<int,int>> Q;
	Q.push({y,x});
	visited[y][x] = 1;

	while(!Q.empty()){
		tie(y,x) = Q.front();
		Q.pop();

		if(A[y][x]=='o')	o++;
		else if(A[y][x]=='v')	v++;

		for(int i=0; i<4;i++){
			int ny = y + dy[i];
			int nx = x + dx[i];

			if(ny<0 || nx<0 || ny>= r || nx >= c ) continue;
			if(visited[ny][nx] || A[ny][nx]=='#')	continue;
			
			visited[ny][nx] = 1;
			Q.push({ny,nx});
		}
	}

	if(o>v){
		wolf-=v;
	}
	else{
		sheep -= o;
	}
}

int main(){
	ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

	cin >> r >> c;

	for(int i=0;i<r;i++){
		for(int j=0; j<c;j++){
			cin >> A[i][j];
			if(A[i][j]=='o')	sheep++;
			else if(A[i][j]=='v')	wolf++;
		}
	}

	for(int i=0;i<r;i++){
		for(int j=0; j<c;j++){
			if(!visited[i][j] && A[i][j]=='o'){
				bfs(i,j);
			}
		}
	}

	cout << sheep << " " << wolf << "\n";

	return 0;
}