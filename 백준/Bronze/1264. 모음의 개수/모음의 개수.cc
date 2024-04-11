#include <bits/stdc++.h>
using namespace std;

int main(){

    while(1){
        string S;
        getline(cin, S);

        if(S=="#")  break;

        int res=0;
        for(int i=0; i<S.size(); i++){
            char C = tolower(S[i]);
            if(C=='a' || C=='e' || C=='i' || C=='o' || C=='u') res++;
        }

        cout << res << "\n";
    }
}