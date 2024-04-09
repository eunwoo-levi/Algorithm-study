#include <bits/stdc++.h>
using namespace std;

stack<char> Stack;
string S;
int res;

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> S;

    int i=0;
    while(S[i]!='\0'){
        if(S[i]=='(')  Stack.push(S[i]);
        else{
            Stack.pop();

            if(S[i-1]=='(')  res+= Stack.size();
            else    res++;
            
        }

        i++;
    }

    cout << res;

    return 0;
}