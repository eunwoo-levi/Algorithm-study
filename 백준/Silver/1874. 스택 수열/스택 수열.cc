#include <bits/stdc++.h>
using namespace std;

int n, k = 1;
stack<int> S;
vector<char> C;

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

		// tmp에 도달할 때까지 스택에 push
		while (k <= tmp)
		{
			S.push(k++);
			C.push_back('+');
		}

		// 스택의 최상단이 tmp와 같다면 pop
		if (S.top() == tmp)
		{
			S.pop();
			C.push_back('-');
		}
		else
		{
			cout << "NO" << endl;
			return 0;
		}
	}

	// 연산 순서 출력
	for (char c : C)
	{
		cout << c << '\n';
	}

	return 0;
}
