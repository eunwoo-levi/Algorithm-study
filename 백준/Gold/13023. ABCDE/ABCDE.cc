#include <bits/stdc++.h>
using namespace std;

int n, m, res;
vector<int> V[2001];
int visited[2001];

void dfs(int v, int k)
{
	visited[v] = 1;

	if (k == 5 || res)
	{
		res = 1;
		return;
	}

	for (int i = 0; i < V[v].size(); i++)
	{
		int w = V[v][i];

		if (!visited[w])
		{
			dfs(w, k + 1);
		}
	}

	visited[v] = 0;
}

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> n >> m;

	for (int i = 0; i < m; i++)
	{
		int a, b;
		cin >> a >> b;
		V[a].push_back(b);
		V[b].push_back(a);
	}

	for (int i = 0; i < n; i++)
	{
		fill(visited, visited + n, 0);
		dfs(i, 1);
		if (res == 1)
		{
			break;
		}
	}

	if (!res)
	{
		cout << "0";
		return 0;
	}

	cout << "1";
	return 0;
}