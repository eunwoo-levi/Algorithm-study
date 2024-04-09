#include <iostream>
using namespace std;

const int MAX_SIZE = 10000001;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int A[MAX_SIZE] = {0};
    int B[MAX_SIZE] = {0};

    int n, m;
    cin >> n;

    for (int i = 0; i < n; ++i) {
        int tmp;
        cin >> tmp;
        if (tmp >= 0)
            A[tmp]++;
        else
            B[-tmp]++;
    }

    cin >> m;

    for (int i = 0; i < m; ++i) {
        int tmp;
        cin >> tmp;
        if (tmp >= 0) {
            if (A[tmp] > 0)
                cout << "1 ";
            else
                cout << "0 ";
        } else {
            if (B[-tmp] > 0)
                cout << "1 ";
            else
                cout << "0 ";
        }
    }

    return 0;
}
