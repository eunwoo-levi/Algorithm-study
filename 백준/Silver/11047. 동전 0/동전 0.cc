#include <iostream>
#include <algorithm>
using namespace std;

int main()
{

	int A[10];
	int i, n, k, count = 0, sum = 0, x=1;

	cin >> n >> k;

	

	for (i = 0; i < n; i++) {
		cin >> A[i];
	}

	for (i = n - 1; i >= 0; i--)
	{
		if(A[i]>(k-sum))
			continue;

		x = 1;
		while (1) {
			if (A[i] * x <= (k - sum)) {
				x++;
			}
			else {
				x--;
				sum += A[i]*x;
				count += x;
				break;
			}
		}
	}

	cout << count;

	

}