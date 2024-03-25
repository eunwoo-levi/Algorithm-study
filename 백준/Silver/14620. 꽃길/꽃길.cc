// 백트래킹
#include <bits/stdc++.h>
using namespace std;

int n, res=987654321;
int A[11][11], visited[11][11];
const int dy[] = {-1, 0 , 1 ,0}, dx[] = {0,1,0,-1};

int SUM(int y, int x){
	visited[y][x]= 1;
	int Sum=A[y][x];

	for(int i=0;i<4;i++){
		int ny = y + dy[i];
		int nx = x + dx[i];
		visited[ny][nx] = 1;
		Sum+=A[ny][nx];
		
	}

	return Sum;
}

bool Check(int y, int x){
	if(visited[y][x])	return false;

	for(int i=0; i<4;i++){
		int ny = y + dy[i];
		int nx = x + dx[i];
		
		if(ny<0||ny>=n||nx<0||nx>=n||visited[ny][nx])	return false;
	}

	return true;
}

void erase(int y, int x) {
    visited[y][x] = 0;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        visited[ny][nx] = 0;
    }
}

void solve(int cnt, int Sum){
	if (cnt==3){
		res = min(res, Sum);
		return;
	}

	for(int i=0; i<n;i++){
		for(int j=0; j<n;j++){
			if(Check(i,j)){
				solve(cnt+1, Sum +SUM(i,j));
				erase(i,j);
			}
		}
	}
}


int main() {
	ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    cin >> n;

	for(int i=0; i<n;i++){
		for(int j=0; j<n;j++){
			cin >> A[i][j];
		}
	}

	solve(0,0);

	cout << res;


	return 0;
}