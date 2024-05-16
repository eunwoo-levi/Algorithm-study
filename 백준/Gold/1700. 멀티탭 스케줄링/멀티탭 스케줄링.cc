#include <bits/stdc++.h>
using namespace std;

// Optimal Page Replacement 기법
// 1. 미래에 존재하지 않을 경우
// 2. 미래에 가장 마지막에 존재하는 경우

int n, k, A[104], visited[104], cnt;
vector<int> V;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    cin >> k >> n;

    for (int i = 0; i < n; i++)     cin >> A[i];

    for (int i = 0; i < n; i++){
        if (!visited[A[i]]){
            if (V.size() == k){
                int last_idx = 0;
                int pos;
                for (int it : V){
                    int tmp_idx = 987654321;
                    for(int j=i+1;j<n;j++){
                        if(it==A[j]){
                            tmp_idx = j;
                            break;
                        }
                    }
                    if(last_idx<tmp_idx){
                        last_idx = tmp_idx;
                        pos = it;
                    }
                }
                visited[pos] = 0;
                cnt++;
                V.erase(find(V.begin(),V.end(),pos));
            }
            V.push_back(A[i]);
            visited[A[i]]=1;
        }
    }

    cout << cnt;
    return 0;
}