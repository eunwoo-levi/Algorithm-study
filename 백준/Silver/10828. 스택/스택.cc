#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;

    stack<int> stk;

    while (n--) {
        string cmd;
        cin >> cmd;

        if (cmd == "push") {
            int num;
            cin >> num;
            stk.push(num);
        }
        else if (cmd == "pop") {
            if (stk.empty()) {
                cout << "-1\n";
            }
            else {
                cout << stk.top() << '\n';
                stk.pop();
            }
        }
        else if (cmd == "size") {
            cout << stk.size() << '\n';
        }
        else if (cmd == "empty") {
            cout << (stk.empty() ? 1 : 0) << '\n';
        }
        else if (cmd == "top") {
            if (stk.empty()) {
                cout << "-1\n";
            }
            else {
                cout << stk.top() << '\n';
            }
        }
    }

    return 0;
}