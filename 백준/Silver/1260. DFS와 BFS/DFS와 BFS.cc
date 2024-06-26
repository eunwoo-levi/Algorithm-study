#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
using namespace std;

int v, e, s, v_1,v_2;
int visited[1001] = { 0 };
vector<int> adj[1001];
queue<int> Q;

void dfs(int v, int s) {
	visited[s] = 1;
	cout << s << " ";

	sort(adj[s].begin(), adj[s].end());
	for (auto it : adj[s]) {
		if (!visited[it])
			dfs(v, it);
	}
}

void bfs(int s) {
	visited[s] = 1;

	Q.push(s);

	while (!Q.empty()) {
		s = Q.front();
		Q.pop();

		cout << s << " ";
		sort(adj[s].begin(), adj[s].end());
		for (auto it : adj[s]) {
			if (!visited[it]) {
				visited[it] = 1;
				Q.push(it);
			}
		}
	}
}


int main()
{
	ios::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
	
	cin >> v>> e>> s;

	for (int i = 0; i < e; i++) {
		cin >> v_1 >> v_2;
		adj[v_1].push_back(v_2);
		adj[v_2].push_back(v_1);
	}

	dfs(v,s);
	cout << "\n";
	fill(&visited[0], &visited[0] + 1001, 0);
	bfs(s);
	
}