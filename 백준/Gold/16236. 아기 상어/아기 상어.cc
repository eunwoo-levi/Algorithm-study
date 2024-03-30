#include <bits/stdc++.h>
using namespace std;

int n;
int A[21][21] = { 0 };
const int dy[] = {-1,0,1,0} , dx[] = {0,1,0,-1};
int fx, fy;
int shark_size = 2, shark_eat = 0;
int result = 0, cnt;
bool endd = false, eat = false;
pair<int, int> shark;

void bfs(int y, int x) {
	bool visited[21][21] = { 0 };
	queue<tuple<int,int,int>> Q;
	int temp = 999999999;
	Q.push({y,x,0});
	visited[y][x] = true;

	while (!Q.empty()) {
		tie(y,x,cnt) = Q.front();
		if (A[y][x] > 0 && A[y][x] < shark_size && temp == cnt) {
			if (fy > y || (fy == y && fx > x)){         //  윗쪽 우선시, 그 중에서도 왼쪽을 우선시
				fy = y;
				fx = x;
				continue;
			}
		}
		Q.pop();

		visited[y][x] = true;
		for (int i = 0; i < 4; i++) {
            int ny = y + dy[i];
			int nx = x + dx[i];
			
			if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx])  continue;

			if (A[ny][nx] <= shark_size) {// 지나가거나 먹을 수 있는 경우
				if (A[ny][nx] > 0 && A[ny][nx] < shark_size && !eat) { //물고기를 먹을 수 있는 경우
					eat = true; // 한 마리 먹음
					fx = nx; //시작 위치를 물고기를 먹었던 위치로
					fy = ny;
					temp = cnt + 1; // 한 마리 먹는데걸린 시간
					result += temp; // 총 시간에 추가
				}
				else { // 물고기를 못먹는 경우
					Q.push({ny,nx,cnt+1});
					visited[ny][nx] = true;
				}
			}
		}
	}
	//최종 상어 위치의 값을 0으로 초기화 (먹음을 의미)
	A[fy][fx] = 0;
	//다음 시작 시점을 이야기  
	shark = { fy,fx };
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> A[i][j];
			if (A[i][j] == 9) {
				A[i][j] = 0;
				shark = { i,j };
			}
		}
	}

	while (true) {
		bfs(shark.first, shark.second);
		if (eat == true) {
			eat = false;
			shark_eat += 1;
			if (shark_eat == shark_size) {
				shark_size += 1;
				shark_eat = 0;
			}
		}
		else {
			break;
		}
	}

	cout << result << '\n';
}