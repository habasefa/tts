import sys, threading
vertices=int(input())
memo={}
for _ in range(vertices-1):
    print(vertices)
    value=[int(x) for x in input().split()]
    if value[0] not in memo:
        memo[value[0]]=[value[1]]
    else:
        memo[value[0]].append(value[1])
    if value[1] not in memo:
        memo[value[1]]=[value[0]]
    else:
        memo[value[1]].append(value[0])
color=[int(x) for x in input().split()]
def main(child,parent,colors):
    print(child,parent,colors)
    if len(memo[child])==1:
        return 0
    else:
        for children in memo[child]:
            if children==parent:
                continue
            if color[children-1]!=colors:
                return 1
            value=main(children,child,colors)
            ans=0
            ans+=value
        return value
for x in range(1,vertices+1):
    for childern in memo[x]:
        value=main(childern,x,color[childern-1])
        if value>0:
            print("NO")
            break
    if not value:
        continue
    else:
        print("YES")
        print(x)
        break
    
def main(child,parent,colors):
    print(child,parent,colors)
    if len(memo[child])==1:
        return 0
    else:
        for children in memo[child]:
            if children==parent:
                continue
            if color[children]!=colors:
                return 1
            value=main(children,child,colors)
            ans=0
            ans+=value
        return value
            

