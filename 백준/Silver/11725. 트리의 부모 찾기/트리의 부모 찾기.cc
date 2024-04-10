#include <bits/stdc++.h>
using namespace std;

vector<int> V[100004];
int visited[100004];
int res[100004];

int n;

void bfs(){
    queue<int> Q;
    visited[1]=true;
    Q.push(1);
    
    while(!Q.empty()){
        int parent=Q.front();
        Q.pop();
        
        for(int i=0; i<V[parent].size(); i++){
            int child=V[parent][i];
            if(!visited[child]){
                res[child]=parent;
                visited[child]=true;
                Q.push(child);
            }
        }
    }
}

int main() {
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> n; 
    for(int i=0;i<n-1;i++) { 
        int x,y; 
        cin >> x >> y; 
        V[x].push_back(y); 
        V[y].push_back(x); 
    } 
    
    bfs(); 
    
    for(int i=2;i<=n;i++) 
        cout << res[i] << "\n"; 
}