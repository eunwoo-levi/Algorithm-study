def solution(enroll, referral, seller, amount):
    idx = {name: i for i, name in enumerate(enroll)}
    profits = [0] * len(enroll)

    for i, name in enumerate(seller):
        money = amount[i] * 100

        while name != "-" and money > 0:
            give = money // 10
            keep = money - give

            profits[idx[name]] += keep

            name = referral[idx[name]]
            money = give

    return profits