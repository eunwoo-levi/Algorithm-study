#include <bits/stdc++.h>
using namespace std;

int n,m;
int a,b,c,d, res, flag=0;
char A[304][304];
int visited[304][304];
const int dy[4] = {-1,0,1,0} , dx[4] = {0,1,0,-1};
queue<pair<int,int>> Q;

void bfs(int y, int x){
    visited[y][x] = 1;
    Q.push({y,x});
    memset(visited, 0, sizeof(visited));
    
    while(!Q.empty()){
        tie(y,x) = Q.front();
        Q.pop();

        for(int i=0; i<4;i++){
            int ny = y + dy[i];
            int nx = x + dx[i];

            if(ny<1 || ny >n|| nx<1 || nx >m || visited[ny][nx])   continue;
            visited[ny][nx] = 1;
            
            if(A[ny][nx]=='#'){
                flag = 1;
                return;
            }
            if(A[ny][nx] == '1')    A[ny][nx] = '0';
            else if(A[ny][nx] == '0')    Q.push({ny,nx});
        }
    }


}


int main(){
    ios::sync_with_stdio(0); cin.tie(0);
    cin >> n >> m;

    cin >> a >> b >> c >> d;        // 주난 위치: a,b / 범인 위치 : c,d

    for(int i=1; i<=n;i++){
        for(int j=1; j<=m; j++){
            cin >> A[i][j];
        }
    }

    while(1){
        res++;
        bfs(a,b);
        if(flag==1) break;
    }

    cout << res;
    
}