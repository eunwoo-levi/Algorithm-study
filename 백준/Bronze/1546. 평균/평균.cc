#include <iostream>
#include <vector>
using namespace std;

int main()
{
	int i,n;
	double sum=0, avg,max=0;

	cin >> n;

	vector<double> A(n);

	for (i = 0; i < n; i++) {
		cin >> A[i];

		if (i == 0)
			max = A[0];

		else
			if(max < A[i])
				max = A[i];
	}


	for (i = 0; i < n; i++) {
		sum += A[i]/max*100;
	}

	avg = sum / (double)n;

	printf("%lf", avg);

}