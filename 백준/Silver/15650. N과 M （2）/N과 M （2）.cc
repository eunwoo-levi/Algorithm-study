#include <bits/stdc++.h>
using namespace std;

int n,m,cnt;
int A[9], visited[9];

void solve(int idx, int cnt){
  if(cnt==m){
    for(int i=0; i<m;i++) cout << A[i] << " ";
    cout << "\n";
    return;
  }

  for(int i=idx; i<=n;i++){
    if(!visited[i]){
      visited[i] = 1;
      A[cnt] = i;
      solve(i+1, cnt+1);
      visited[i] = 0;
    }
  }
}

int main(){
  cin >> n >> m;

  solve(1,0);
}