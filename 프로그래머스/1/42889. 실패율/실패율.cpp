#include <bits/stdc++.h>

using namespace std;

vector<pair<double,int>> res;

bool cmp(const pair<double,int> &a,const pair<double,int> &b){
    if(a.first==b.first)    return a.second<b.second;
    
    return a.first > b.first;
}

vector<int> solution(int N, vector<int> stages) {
    vector<int> answer;
    
    for(int i=1; i<=N;i++){
        double a=0, b=0;;
        for(int j=0; j<stages.size();j++){
            if(stages[j]==i)    a++;
            if(stages[j]>=i)    b++;
        }
        
        if(b!=0)    res.push_back({a/b, i});
        else    res.push_back({0,i});
    }
    
    sort(res.begin(),res.end(), cmp);
    
    for(auto it : res){
        answer.push_back(it.second);
    }
    
    
    return answer;
}