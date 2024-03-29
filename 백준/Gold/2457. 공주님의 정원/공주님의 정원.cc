#include <bits/stdc++.h>
using namespace std;

int n, a,b,c,d, cnt;

vector<vector<pair<int,int>>> Day;
vector<pair<int,int>> V;

bool compare(vector<pair<int,int>> a, vector<pair<int,int>> b){
  if(a[0].first == b[0].first)  return a[0].second < b[0].second;   // 일별로 정렬
  return a[0].first < b[0].first;   // 월별로 정렬
}

pair<int, int> Day_compare(pair<int, int> A, pair<int, int> B){
  if(A.first < B.first)   return B;

  else if(A.first == B.first){
    if(A.second < B.second)   return B;
  }

  return A;
}


int main() {
  ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

  cin >> n;

  for(int i=0; i<n; i++){
    cin >> a >> b >> c >> d;
    V.push_back({a,b});
    V.push_back({c,d});
    Day.push_back(V);
    V.clear();
  }

  sort(Day.begin(),Day.end(), compare);

  int check = 0;
  pair<int,int> temp = {1,1};   // 날짜 초기화
  pair<int,int> temp_s = { 3,1 };    // 3/1
  pair<int, int> temp_e = { 12, 1 }; // 11/31

  for(int i=0; i<n; i++){

    // 3월 1일 이전인 경우
    if(Day_compare(temp_s, Day[i][0]) == temp_s){
      temp = Day_compare(temp,Day[i][1]);
      
      if(Day_compare(temp, temp_e) == temp){           // 11월 30일 이후일 경우
        check = 1;
        break;
      }
    }

    // 3월 1일 이후인 경우
    else{
      temp_s = temp;
      cnt++;

      if(Day_compare(temp_s, Day[i][0]) == temp_s){
        temp = Day[i][1];
        if(Day_compare(temp, temp_e) == temp){      // 11월 30일 이후일 경우
          check = 1;
          break;
        }   
      }
      //  기준 위치보다 다음 꽃의 위치가 뒤에 있을 경우
      else  break;
    }
  }

  if(check==0)    cout << "0";
  else  cout << cnt + 1;


  return 0;
}