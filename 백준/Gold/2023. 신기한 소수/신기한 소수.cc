#include <bits/stdc++.h>
using namespace std;

int n;

bool isPrime(int n)
{
	for (int i = 2; i < n; i++)
	{
		if (n % i == 0)
		{
			return 0;
		}
	}

	return 1;
}

void dfs(int a, int b) // a: 숫자 , b: 자릿수
{
	if (b == n)
	{
		if (isPrime(a))
		{
			cout << a << "\n";
		}
		return;
	}

	for (int i = 1; i < 10; i++)
	{
		if (i % 2 == 0)
		{
			continue;
		}

		if (isPrime(10 * a + i))
		{
			dfs(10 * a + i, b + 1);
		}
	}
}

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> n;

	dfs(2, 1); // 숫자, 자리수
	dfs(3, 1);
	dfs(5, 1);
	dfs(7, 1);

	return 0;
}