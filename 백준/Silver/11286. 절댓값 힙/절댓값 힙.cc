#include<iostream>
#include<queue>
#include<cmath>
using namespace std;

struct comp
{
	bool operator()(int a, int b)
	{
		if (abs(a) == abs(b))
			return a > b;
		else
			return abs(a) > abs(b);
	}
};

void Solution(int n)
{
	priority_queue< int, vector<int>, comp > pq;

	while (n--)
	{
		int Command; cin >> Command;

		if (Command == 0)
		{
			if (pq.empty())
			{
				cout << '0' << '\n';
			}
			else
			{
				cout << pq.top() << '\n';
				pq.pop();
			}
		}
		else
		{
			pq.push(Command);
		}
	}
}

int main()
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);

	int n; cin >> n;
	Solution(n);

	return 0;
}