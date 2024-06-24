#include <bits/stdc++.h>
using namespace std;

int n, m;
deque<pair<int, int>> Q; // <index, 값>

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> n >> m;

	for (int i = 0; i < n; i++)
	{
		int tmp;
		cin >> tmp;

		while (Q.size() && Q.back().second > tmp)
		{
			Q.pop_back();
		}

		Q.push_back({i, tmp});

		if (Q.front().first <= (i - m))
		{
			Q.pop_front();
		}

		cout << Q.front().second << " ";
	}
}