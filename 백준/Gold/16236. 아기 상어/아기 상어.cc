#include <bits/stdc++.h>
using namespace std;

int n;
int A[21][21];
bool visited[21][21];
const int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};
int shark_size = 2, shark_eat = 0;
int result = 0, cnt;
bool eat = false;
pair<int, int> shark;

void bfs(int y, int x) {
	memset(visited, 0, sizeof(visited));
	queue<tuple<int, int, int>> Q;
	int last_eaten_time = 0; // 먹은 물고기의 위치와 시간을 추적하기 위한 변수

	Q.push({y, x, 0});
	visited[y][x] = true;

	while (!Q.empty()) {
		tie(y, x, cnt) = Q.front();
		Q.pop();

		if (A[y][x] > 0 && A[y][x] < shark_size && last_eaten_time == cnt) {
			if (shark.first > y || (shark.first == y && shark.second > x)) { // 윗쪽 우선시, 그 중에서도 왼쪽을 우선시
				shark = {y, x};
				continue;
			}
		}

		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];

			if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;

			if (A[ny][nx] <= shark_size) { // 지나가거나 먹을 수 있는 경우
				if (A[ny][nx] > 0 && A[ny][nx] < shark_size && !eat) { // 물고기를 먹을 수 있는 경우
					eat = true; // 한 마리 먹음
					shark = {ny, nx}; // 시작 위치를 물고기를 먹었던 위치로
					last_eaten_time = cnt + 1; // 한 마리 먹는데 걸린 시간을 저장
					result += last_eaten_time; // 총 시간에 추가
				}
				else { // 물고기를 못 먹는 경우
					visited[ny][nx] = true;
					Q.push({ny, nx, cnt + 1});
				}
			}
		}
	}
	// 최종 상어 위치의 값을 0으로 초기화 (먹음을 의미)
	A[shark.first][shark.second] = 0;
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> A[i][j];
			if (A[i][j] == 9) {
				A[i][j] = 0;
				shark = {i, j};
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
	return 0;
}
