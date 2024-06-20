#include <bits/stdc++.h>
using namespace std;

int n, m;
long long res;
long long A[1000001], B[1000001];

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> n >> m;

	for (int i = 1; i <= n; i++)
	{
		long long tmp;
		cin >> tmp;
		A[i] = (A[i - 1] + tmp) % m; // 모듈러 연산
	}

	for (int i = 1; i <= n; i++)
	{
		if (A[i] == 0)
			res++;

		B[A[i]]++;
	}

	for (int i = 0; i < m; i++)
	{
		// 나머지가 같은 인덱스 중 2개를 뽑는 경우의 수를 더하기 -> nC2 = n(n-1)/2
		if (B[i] > 1)
		{
			res = res + (B[i] * (B[i] - 1) / 2);
		}
	}

	cout << res;
}