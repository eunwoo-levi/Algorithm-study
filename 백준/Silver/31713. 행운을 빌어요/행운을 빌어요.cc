#include <bits/stdc++.h>

using namespace std;

int n;

int main() {
    cin >> n;

    for (int i = 0; i < n; i++) {
        int A, B;
        cin >> A >> B;

        int res = 987654321;

        for (int X = A; X <= 1000; ++X) { 
            int f_X; 
            if (3 * X <= B && B <= 4 * X) { 
                f_X = 0;
            } else if (B < 3 * X) { 
                f_X = 3 * X - B;
            }

            res = min(res, X - A + f_X);
        }

        cout << res << "\n"; 
    }

    return 0;
}
