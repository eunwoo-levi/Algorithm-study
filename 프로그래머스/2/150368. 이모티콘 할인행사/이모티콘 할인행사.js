function solution(users, emoticons) {
    let maxSubscribers = 0;
    let maxRevenue = 0;

    function dfs(discounts, index) {
        if (index === emoticons.length) {
            let subscribers = 0;
            let revenue = 0;

            for (const [userDiscountRate, userLimit] of users) {
                let userPurchase = 0;
                for (let i = 0; i < emoticons.length; i++) {
                    if (discounts[i] >= userDiscountRate) {
                        userPurchase += emoticons[i] * (100 - discounts[i]) / 100;
                    }
                }
                if (userPurchase >= userLimit) {
                    subscribers++;
                } else {
                    revenue += userPurchase;
                }
            }

            if (subscribers > maxSubscribers || (subscribers === maxSubscribers && revenue > maxRevenue)) {
                maxSubscribers = subscribers;
                maxRevenue = revenue;
            }
            return;
        }

        for (let discount of [10, 20, 30, 40]) {
            discounts[index] = discount;
            dfs(discounts, index + 1);
        }
    }

    dfs(Array(emoticons.length).fill(0), 0);
    return [maxSubscribers, Math.floor(maxRevenue)];
}

