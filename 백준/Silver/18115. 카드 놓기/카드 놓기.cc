#include <iostream>
#include <vector>
#include <deque>

using namespace std;

/*
카드의 상태가 위에서부터 1,2,3,..n으로 끝남.
기술의 순서를 입력으로 받음
=> 역순으로 계산해보자
*/

int n; 
deque<int> dq;

int main() {
	ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    cin >> n;
	vector<int>v(n);

	for (int i = 0; i < n; i++) {
		cin >> v[i];
	}

	//문제 해결
	//입력이 1일 때: 맨 뒤에 원소를 넣어준다
	//입력이 2일 때: 원소를 맨 뒤에서 두번째에 넣어준다
	//입력이 3일 때: 원소를 맨 앞에 넣어준다
    
	int card = 1;
	for (int i = n - 1; i >= 0; i--) {

		if (v[i] == 1) {
			dq.push_back(card);
		}else if (v[i] == 2) {
			int tmp = dq.back();
			dq.pop_back();
			dq.push_back(card);
			dq.push_back(tmp);
		}else if (v[i] == 3) {
			dq.push_front(card);
		}

		card++;
	}

	//결과 출력
	//위에서부터 출력하라고 했으므로 뒤에서부터 출력
	for (int i = n-1; i >=0; i--) cout << dq[i] << ' ';
	cout << '\n';
}