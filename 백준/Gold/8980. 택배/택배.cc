// my velog 참고
#include <bits/stdc++.h>
using namespace std;

int N, C, M;
int box, res;
int truck[2004];                //마을별로 트럭에 싣고있는 택배개수 저장
vector<tuple<int,int,int>> V;

bool compare(tuple<int,int,int> a, tuple<int,int,int> b){
    if(get<1>(a)==get<1>(b))    return get<0>(a) < get<0>(b);
    return get<1>(a) < get<1>(b);             // tuple 의 element 값 가져올때 get<index>(벡터이름);
}

int main(){
    ios::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> N >> C;
    cin >> M;

    for(int i=0; i<M;i++){
        int a,b,c;
        cin >> a >> b >> c;
        V.push_back({a,b,c});
    }

    sort(V.begin(), V.end(), compare);

    for(int i=0; i< V.size(); i++){
        int from, to, size;
        int MAX=0;                   //  현재 택배가 지나가야할 truck배열값중 가장큰거
        tie(from, to, size) = V[i];

        for(int j=from; j<to; j++)      MAX =  max(MAX, truck[j]);

        int box = min(size, C-MAX);     //  가져갈 수있는 택배수 구하기 위한 변수 (원래 택배수,가능한공간)

        for(int j=from; j<to; j++)      truck[j] += box;    //출발부터 도착전까지 가능한 택배수 할당

        res+= box;
    }

    cout << res;

    return 0;
}