#include <bits/stdc++.h>
using namespace std;

int n,m;
int arr[10];

void solve(int idx,int len){
    if(len==m){
        for(int i=0;i<m;i++)
            printf("%d ",arr[i]);
        printf("\n");
        return;
    }

    for(int i=idx;i<=n;i++){
        arr[len] = i;
        solve(i+1,len+1);
    }

    return;
}

int main(){
    scanf("%d %d",&n,&m);

    solve(1,0);

    return 0;
}