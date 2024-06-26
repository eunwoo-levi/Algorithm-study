#include <bits/stdc++.h>
using namespace std;

int n;
vector<pair<int, int>> V;
int A[51];

int main()
{
	cin >> n;

	for (int i = 0; i < n; i++)
	{
		int tmp;
		cin >> tmp;
		V.push_back({tmp, i});
	}

	sort(V.begin(), V.end());

	for (int i = 0; i < n; i++)
	{
		A[V[i].second] = i;
	}

	for (int i = 0; i < n; i++)
	{
		cout << A[i] << " ";
	}
}