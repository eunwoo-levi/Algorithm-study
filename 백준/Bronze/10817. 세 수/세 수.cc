#include <stdio.h>

int main(){
    int Max=-1, res=0;

    for(int i=0; i<3;i++){
        int tmp;
        scanf("%d", &tmp);
        if(tmp>=Max){
            res = Max;
            Max = tmp;
        }
        else if(tmp<=Max && tmp>=res){
            res = tmp;
        }
    }


    printf("%d", res);
}