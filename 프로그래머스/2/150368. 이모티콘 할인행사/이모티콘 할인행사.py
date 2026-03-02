# 순서 상관 O , 중복 허용 =>   중복 순열  => product
# 1. 할인율 2개 뽑아서 각 user 할인율([0]) 이 넘으면 각 emotion과 할인율 계산해서 user의 특정 가격[1]이 넘을 때 플러스 가입 여부
from itertools import product

def solution(users, emoticons):
    discounts = [10, 20, 30, 40]
    max_plus = -1
    max_price = -1
    
    # 중복 순열 -> 할인율 2개 뽑음
    for discount in product(discounts, repeat=len(emoticons)):
        plus = 0
        purchased_price = 0
        
        for user in users:
            user_disc, user_price = user
            
            total_price = 0
            # 각 emoticon의 가격에 disc를 계산한 가격을 구함
            for disc, emoticon in zip(discount, emoticons):
                # user가 원하는 할인율 넘을 때만 고려
                if (disc >= user_disc):
                    total_price += emoticon * (100-disc) // 100
            if(total_price >= user_price):
                plus+=1
            else:
                purchased_price += total_price
                    
        if(plus > max_plus or (plus == max_plus and purchased_price > max_price)):
            max_plus = plus
            max_price = purchased_price
    
    return [max_plus, max_price]