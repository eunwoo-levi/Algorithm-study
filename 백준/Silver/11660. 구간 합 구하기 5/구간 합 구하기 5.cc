#include <bits/stdc++.h>
using namespace std;

int d[1025][1025];
int n, m;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> n >> m;

	for (int i = 1; i <= n; i++)
	{
		for (int j = 1; j <= n; j++)
		{
			int tmp;
			cin >> tmp;

			d[i][j] = d[i][j - 1] + tmp;
		}
	}

	for (int i = 0; i < m; i++)
	{
		int y, x, y2, x2;
		cin >> y >> x >> y2 >> x2;
		int res = 0;

		for (int i = y; i <= y2; i++)
		{
			res += d[i][x2] - d[i][x - 1];
		}

		cout << res << "\n";
	}
}