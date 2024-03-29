#include <bits/stdc++.h>
using namespace std;

int n, m, k;
int A[1001][1001];
int visited[1001][1001][11]; 
const int dy[] = {-1,0,1,0}, dx[] = {0,1,0,-1};


int bfs(int y, int x, int wall) {
	queue <tuple<int, int, int>> Q;
	Q.push({y, x, wall});
	visited[y][x][wall] = 1;

	while (!Q.empty()) {
		tie(y,x,wall) = Q.front();
		Q.pop();

		if (y == n && x == m) return visited[y][x][wall];

		for (int i = 0; i < 4; i++) {
      int ny = y + dy[i];
			int nx = x + dx[i];

			if(ny<1 || ny>n || nx<1 || nx>m)   continue;

      // 벽이 없고 아직 방문하지 않은 경우
			if (A[ny][nx] == 0 && visited[ny][nx][wall] == 0) {
				visited[ny][nx][wall] = visited[y][x][wall] + 1;
				Q.push({ny, nx, wall});
			}

			// 벽이 있고 아직 벽을 뚫지 않은 경우
			if (A[ny][nx] == 1 && visited[ny][nx][wall+1]==0 && wall < k) {
				visited[ny][nx][wall + 1] = visited[y][x][wall] + 1;
				Q.push({ny, nx, wall + 1});
			}
		}
	}


	return -1;
}

int main() {
  ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
	cin >> n >> m >> k;

	for (int i = 1; i <= n; i++) {
    string S;
    cin >> S;
		for (int j = 1; j <= m; j++) {
			A[i][j] = S[j-1] - '0';
		}
	}

	cout << bfs(1,1,0);

	

}