#include <bits/stdc++.h>
using namespace std;

string str;
string temp = "";
int result =0;
bool Minus=false;

int main() {
    cin>> str;

    for(auto i=0; i<=str.size(); i++) {
        if(str[i]=='+' || str[i]=='-' || str[i]=='\0') {
            if (Minus) {
                result-=stoi(temp);
            } 

            else {
                result+=stoi(temp);
            }

            temp="";

            if(str[i]=='-') {
                Minus=true;
            }
        } 
        
        else {              // 숫자 일경우
            temp+=str[i];
        }
        
    }
    cout<< result;
}