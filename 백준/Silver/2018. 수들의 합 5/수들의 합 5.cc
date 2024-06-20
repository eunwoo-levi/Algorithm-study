#include <bits/stdc++.h>
using namespace std;

int n, Sum = 0, res = 1;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> n;

	int s = 1, e = 1;

	while (e <= n)
	{
		if (Sum == n)
		{
			res++;
			Sum += e;
			e++;
		}

		else if (Sum < n)
		{
			Sum += e;
			e++;
		}

		else
		{
			Sum -= s;
			s++;
		}
	}

	cout << res;
}