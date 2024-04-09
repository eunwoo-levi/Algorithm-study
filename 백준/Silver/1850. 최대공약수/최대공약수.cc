#include <bits/stdc++.h>
using namespace std;

long long n,m;

long long gcd(long long a, long long b){
    long long tmp;

    while(b != 0){
        tmp = a % b;
        a = b;
        b = tmp;
    }

    return a;
}

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    if(n<m) swap(n,m);
    cin >> n >> m;

    long long k = gcd(n, m);
    
    for(int i=0; i<k;i++){
        cout << "1";
    }
 

    return 0;
}
