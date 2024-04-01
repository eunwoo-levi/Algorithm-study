#include <bits/stdc++.h>
using namespace std;

const int dy[] = {-1,0,1,0}, dx[] = {0,1,0,-1};
int A[1004][1004], visited[1004][1004], B[1001][1001];
int n,m;
pair<int,int> Start;

void bfs(int y, int x){
    queue<pair<int,int>> Q;
    visited[y][x] = 1;
    Q.push({y,x});

    while(!Q.empty()){
        tie(y,x) = Q.front();
        Q.pop();

        for(int i=0; i<4;i++){
            int ny = y + dy[i];
            int nx = x + dx[i];

            if(ny<0||ny>=n||nx<0||nx>=m)    continue;
            if(visited[ny][nx] || A[ny][nx]==0) continue;
            visited[ny][nx] = 1;
            B[ny][nx] = B[y][x] + 1;
            Q.push({ny,nx});
        }
    }
}

int main(){
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
    cin >> n >> m;

    memset(B,-1,sizeof(B));

    for(int i=0; i<n;i++){
        for(int j=0;j<m;j++){
            cin >> A[i][j];
            if(A[i][j]==2){
                Start={i,j};
            }
            if(A[i][j]==0)  B[i][j]=0;
        }
    }

    B[Start.first][Start.second] = 0;

    bfs(Start.first, Start.second);

    for(int i=0; i<n;i++){
        for(int j=0;j<m;j++){
            cout << B[i][j] << " ";
        }
        cout << "\n";
    }


    return 0;
}