#include <iostream>
using namespace std;

int v, e, a, b, cnt = 0;
int A[1001][1001] = { 0 }, visited[1001] = { 0 };

void dfs(int node) {
    visited[node] = 1;

    for (int i = 1; i <= v; i++) {
        if (!visited[i] && A[node][i]) {
            dfs(i);
        }
    }
}

int main() {
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> v >> e;

    for (int i = 0; i < e; i++) {
        cin >> a >> b;
        A[a][b] = 1;
        A[b][a] = 1;
    }

    for (int i = 1; i <= v; i++) {
        if (!visited[i]) {
            dfs(i);
            cnt++;
        }
    }

    cout << cnt;

    return 0;
}
