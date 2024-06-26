#include <bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);

	string S;
	getline(cin, S);
	stack<char> word;
	bool inTag = false;

	for (char c : S)
	{
		if (c == '<')
		{
			// 태그 시작 시, 스택에 남은 단어를 모두 출력
			while (!word.empty())
			{
				cout << word.top();
				word.pop();
			}
			inTag = true;
			cout << c;
		}
		else if (c == '>')
		{
			inTag = false;
			cout << c;
		}
		else if (inTag)
		{
			cout << c;
		}
		else if (c == ' ')
		{
			// 단어 사이 공백일 때, 스택에 남은 단어를 모두 출력
			while (!word.empty())
			{
				cout << word.top();
				word.pop();
			}
			cout << c;
		}
		else
		{
			// 단어를 스택에 저장
			word.push(c);
		}
	}

	// 마지막 단어 출력
	while (!word.empty())
	{
		cout << word.top();
		word.pop();
	}

	return 0;
}
