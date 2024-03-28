#include <bits/stdc++.h>
using namespace std;

int n, cnt;
const int dy[] = {-1,0,1,0}, dx[] = {0,1,0, -1};
char A[104][104];
int visited[104][104];
queue<pair<int,int>> Q;

void bfs(int y, int x){
  visited[y][x] = 1;
  Q.push({y,x});

  while(!Q.empty()){
    tie(y,x) = Q.front();
    Q.pop();

    for(int i=0; i<4; i++){
      int ny = y + dy[i];
      int nx = x + dx[i];

      if(ny<0 || ny>=n || nx<0 || nx >= n)  continue;
      if(visited[ny][nx] || A[ny][nx] != A[y][x]) continue;
      visited[ny][nx] = 1;
      Q.push({ny,nx});
    }
  }
}

int main(){
  cin >> n;

  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      cin >> A[i][j]; 
    }
  }

  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      if(!visited[i][j]){
        cnt++;
        bfs(i,j);
      }
    }
  }

  cout << cnt << " ";
  cnt = 0;

  memset(visited,0, sizeof(visited));

  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      if(A[i][j]=='G')  A[i][j] = 'R';
      }
    }


  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      if(!visited[i][j]){
        cnt++;
        bfs(i,j);
      }
    }
  }

  cout<< cnt;
  
  return 0;
}