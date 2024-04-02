#include <bits/stdc++.h>
using namespace std;

int n, res;
int col[16];

void solve(int x){
    if(x==n){
        res++;
    }

    else{
        for(int i=0; i<n;i++){
            col[x] = i;
            bool flag = true;

            for(int j=0; j<x;j++){
                if(col[x] == col[j] || abs(col[x]- col[j]) == x-j){
                    flag = false;
                    break;
                }
            }

            if(flag)    solve(x+1);
        }
    }

}


int main(){
    cin >> n;

    solve(0);

    cout << res;
}