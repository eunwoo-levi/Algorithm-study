#include <iostream>
using namespace std;
int arr[130][130]; 
int white = 0 , blue = 0; 
void solve(int y, int x, int k){
    bool cut = false; // 잘라야하는지 
    int first_color = arr[y][x]; 

    for (int i = y; i < y + k; i++){
        for (int j = x; j < x + k; j++){
            if(arr[i][j] != first_color){ 
                cut = true;
                break; 
            }
        }
    }

    if(cut){ 
        solve(y, x, k / 2); // 
        solve(y, x + k / 2, k / 2); 
        solve(y + k / 2, x, k / 2); 
        solve(y + k / 2, x + k / 2, k / 2); 
    }

    else{
        if(first_color == 1) 
            blue++;
        else 
            white++;
    }    
}
int main(){
    int n;
    cin >> n;
    for (int i = 0; i < n;i++){
        for (int j = 0; j < n;j++){
            cin >> arr[i][j];
        }
    }

    solve(0, 0, n);
    cout << white << "\n";
    cout << blue;
    return 0;
}
