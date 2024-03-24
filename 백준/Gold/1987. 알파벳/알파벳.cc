#include <bits/stdc++.h>
using namespace std;
int R, C, ret, visited[30];
char a[21][21];
const int dy[] = {-1, 0, 1, 0}, dx[] = { 0, 1, 0, -1}; 

void solve(int y, int x, int cnt){
    ret = max(ret, cnt);

    for(int i = 0; i < 4; i++){
        int ny = y + dy[i];
        int nx = x + dx[i];

        if(ny < 0 || ny >= R || nx < 0 || nx >= C) continue;
        int next = (int)(a[ny][nx] - 'A');
        
        if(visited[next] == 0){
            visited[next] = 1; 
            solve(ny, nx, cnt + 1);
            visited[next] = 0;  
        } 
    }
    return;
}
int main(){
    cin >> R >> C;
    for(int i = 0; i < R; i++){
        for(int j = 0; j < C; j++){
            cin >> a[i][j];
        }
    }
    visited[(int)a[0][0] - 'A'] = 1;
    solve(0, 0, 1);
    cout << ret << '\n';
    return 0;
}
