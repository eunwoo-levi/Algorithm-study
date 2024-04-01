#include <bits/stdc++.h>
using namespace std;

const int dy[] = {-1,0,1,0}, dx[] = {0,1,0,-1};
int n;
int A[26][26] , visited[26][26];
vector<int> V;

void bfs(int y, int x){
    int res=1;
    queue<pair<int,int>> Q;
    
    visited[y][x] = 1;
    Q.push({y,x});

    while(!Q.empty()){
        tie(y,x) = Q.front();
        Q.pop();

        for(int i=0; i<4;i++){
            int ny = y + dy[i];
            int nx = x + dx[i];
            
            if(ny<0||ny>=n||nx<0||nx>=n)    continue;
            if(visited[ny][nx] || A[ny][nx]==0) continue;
            res++;
            visited[ny][nx] = 1;
            Q.push({ny,nx});
        }
    }

    V.push_back(res);       // 갯수를 vector에 담음
}


int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> n;

    for(int i=0; i<n; i++){
        string S;
        cin >> S;
        for(int j=0;j<n;j++){
            A[i][j] = S[j] -'0';
        }
    }

    for(int i=0; i<n; i++){
        for(int j=0;j<n;j++){
            if(A[i][j]!=0 && !visited[i][j]){
                bfs(i,j);
            }
        }
    } 


    sort(V.begin(), V.end());

    cout << V.size() << "\n";
    for(auto it: V) cout << it << "\n";

    return 0;
}