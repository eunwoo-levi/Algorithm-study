#include <bits/stdc++.h>
using namespace std;

int n, Max = -1;
vector<pair<int, int>> V;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> n;

	for (int i = 0; i < n; i++)
	{
		int tmp;
		cin >> tmp;
		V.push_back({tmp, i}); // {값, index}
	}

	sort(V.begin(), V.end());

	for (int i = 0; i < n; i++)
	{
		if (Max < V[i].second - i)
		{
			Max = V[i].second - i;
		}
	}

	cout << Max + 1;
}