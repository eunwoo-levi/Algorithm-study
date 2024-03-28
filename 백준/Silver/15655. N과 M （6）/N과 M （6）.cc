#include <bits/stdc++.h>
using namespace std;

int n, m;
int A[9], B[9];

void solve(int idx, int len) {
  if (len == m) {
    for (int i = 0; i < m; i++)  cout << B[i] << " ";
    cout << "\n";
    return;
  }

  for (int i = idx; i < n; i++) {
      B[len] = A[i];
      solve(i+1, len + 1);
    }
}

int main() {
  ios::sync_with_stdio(0); cin.tie(0);

  cin >> n >> m;

  for (int i = 0; i < n; i++) cin >> A[i];
  

  sort(A, A + n);

  solve(0,0);
}
