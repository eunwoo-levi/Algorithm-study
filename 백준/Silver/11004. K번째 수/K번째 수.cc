#include <bits/stdc++.h>
using namespace std;

int n, k;
vector<int> V;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> n >> k;

	for (int i = 0; i < n; i++)
	{
		int tmp;
		cin >> tmp;
		V.push_back(tmp);
	}

	sort(V.begin(), V.end());

	cout << V[k - 1];
}