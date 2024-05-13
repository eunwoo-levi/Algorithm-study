#include <bits/stdc++.h>
using namespace std;

bool che[4000001];
int n, k, Sum, res;
int A[2000001];

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> n;

    for(int i=2; i<=n; i++){
        if(che[i])   continue;
        for(int j=2*i; j<=n; j+=i){
            che[j] = 1;
        }
    }                                   // 에라토스테네스의 체

    for(int i=2; i<=n;i++){
        if(!che[i]){
            A[k++] = i;
        }
    }

    int start=0, end=0;

    while(1){                       // 투포인터
        if(Sum>=n)  Sum -= A[start++];
        else if (end==k)    break;
        else Sum += A[end++];
        if(Sum==n)  res++;

    }

    cout << res;

}