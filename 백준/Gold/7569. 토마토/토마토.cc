#include <bits/stdc++.h>
using namespace std;

const int dy[] = {-1,1,0,0,0,0}, dx[] = {0,0,-1,1,0,0}, dz[] = {0,0,0,0,-1,1};
int A[104][104][104], visited[104][104][104];
int n,m,h, res=-1;
queue<tuple<int,int,int>> Q;

void bfs(){
    while(!Q.empty()){
        int z,y,x;
        tie(z,y,x) = Q.front();
        Q.pop();

        for(int i=0;i<6;i++){
            int nz = z + dz[i];
            int ny = y + dy[i];
            int nx = x + dx[i];

            if(nz<0||nz>=h||ny<0||ny >=n||nx<0||nx>=m)  continue;
            if(A[nz][ny][nx]!=0 || visited[nz][ny][nx]) continue;
            visited[nz][ny][nx] = visited[z][y][x] + 1;
            Q.push({nz,ny,nx});
        }
    }
}

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> m >> n >> h;

    for(int k=0; k<h;k++){
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                cin >> A[k][i][j];

                if(A[k][i][j]==1){
                    visited[k][i][j]=1;
                    Q.push({k,i,j});
                }
            }
        }
    }

    bfs();


    for(int k=0; k<h;k++){
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(!visited[k][i][j]&&A[k][i][j]==0){        // 토마토가 모두 익지않은 상황일땐 -1 출력
                    cout<< "-1\n";
                    return 0; 
                }

                res = max(res,visited[k][i][j]);
            }
        }
    }


    cout << res-1 <<"\n";
    
    return 0;
} 