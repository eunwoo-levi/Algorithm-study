#include <bits/stdc++.h>
using namespace std;

int n, res;
vector<long long> V;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> n;

	for (int i = 0; i < n; i++)
	{
		long long tmp;
		cin >> tmp;
		V.push_back(tmp);
	}

	sort(V.begin(), V.end());

	for (int i = 0; i < n; i++)
	{
		int l = 0, r = n - 1;

		while (l < r)
		{
			if (V[l] + V[r] > V[i])
			{
				r--;
			}

			else if (V[l] + V[r] < V[i])
			{
				l++;
			}

			else
			{
				if (l != i && r != i)
				{
					res++;
					break;
				}

				else if (l == i)
				{
					l++;
				}
				else if (r == i)
				{
					r--;
				}
			}
		}
	}

	cout << res;
}