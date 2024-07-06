#include <bits/stdc++.h>

using namespace std;

int solution(string dartResult) {
    int answer = 0;
    
    vector<int> V;
    
    for(int i=0; i<dartResult.size();i++){
        int tmp=0;
        
        if(isdigit(dartResult[i+1])){
            tmp = 10;
            i++;
        }
        
        else    tmp = dartResult[i]-'0';
        
        if(dartResult[i+1]=='S'){
            i++;
        }
                
        else if(dartResult[i+1]=='D'){
            tmp = pow(tmp,2);
            i++;
        }
                
        else if(dartResult[i+1]=='T'){
            tmp = pow(tmp,3);
            i++;
        }
            
            
        if(dartResult[i+1]=='*'){
            tmp *=2;
            if(!V.empty()){
                int before = V.back();
                V.pop_back();
                before*=2;
                V.push_back(before);
            }
            i++;
        }
        else if(dartResult[i+1]=='#'){
            tmp *= -1;
            i++;
        }

        
        V.push_back(tmp);
    }
    
    for(auto it:V){
        answer+=it;
    }
    
    
    return answer;
}