S = int(input())
i = 1
cnt = 0
while S >= i:
    S -= i
    cnt += 1
    i += 1
print(cnt)
