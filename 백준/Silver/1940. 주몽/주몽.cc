#include<bits/stdc++.h> 
using namespace std; 

int N, M, k;
vector<int> A;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	
    cin >> N >> M;

    for(int i=0;i<N;i++){
        cin >> k;
        A.push_back(k);
    }

    sort(A.begin(),A.end());

    int s=0, e=N-1;
    int count=0;

    while(s<e){             // 투 포인터 알고리즘
        if(A[s]+A[e]==M){
            count++;
            s++;
        }
        if(A[s]+A[e]<M) s++;
        else    e--;
    }

    cout << count;
}