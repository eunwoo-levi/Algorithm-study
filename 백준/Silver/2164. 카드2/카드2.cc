#include <iostream>
#include <queue>
using namespace std;

int main()
{

	int i, n;

	queue<int> A;

	cin >> n;

	for (i = 1; i <= n; i++) {
		A.push(i);
	}

	while (A.size() != 1) {
		A.pop();
		A.push(A.front());
		A.pop();
	}

	cout << A.front();


}