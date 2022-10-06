import sys 

n = int(input())

if n%4:
    print('prime')
    sys.exit()

two = 0

while n%2 == 0:
    two += 1
    n /= 2

ps = []
d = 3

while n > 1 and d*d <= n:
    while n%d == 0:
        ps.append(d)
        n /= d
    d += 2

if n > 1:
    ps.append(n)


if len(ps) <= 1:
    print('single')
    for i in range(two-1):
        print()