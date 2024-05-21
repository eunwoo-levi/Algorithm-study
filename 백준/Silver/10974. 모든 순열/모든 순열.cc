#include <bits/stdc++.h>
using namespace std;

int A[9];
int n;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> n;
    for(int i=1;i<=n;i++){
        A[i] = i;
    }

    do{
        for(int i=1;i<=n;i++){
            cout << A[i] << " ";
        }
        cout << "\n";
    }while(next_permutation(A+1,A+n+1));
}