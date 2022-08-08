import heapq
from collections import defaultdict,deque
n,m=[int(x) for x in input().split()]
memo=defaultdict(list)

for i in range(m):
    temp=[int(x) for x in input().split()]
    memo[temp[0]].append((temp[1],temp[2]))
    memo[temp[1]].append((temp[0],temp[2]))


dist=defaultdict(int)
parent=defaultdict(int)
node=1
node1=n
for nodes in range(1,n+1):
    dist[nodes]=float("inf")
dist[node]=0
level=[]
heapq.heappush(level,(0,node))
visited=set()
        
parent[node]=0
ans=[]
check=False
while level:

    value=heapq.heappop(level)
    if value[1]==node1:
        find=node1
            
        while parent[find]!=0:
            ans.append(find)
            find=parent[find]
        ans.append(find)
        ans.reverse()
        for i in range(len(ans)-1):
            print(ans[i],end=" ")
        print(ans[i+1],end="\n")
        check=True
        break
    if value[1] in visited:
        continue

    visited.add(value[1])
    for i in memo[value[1]]:
        if dist[i[0]]>dist[value[1]]+i[1]:
            dist[i[0]]=dist[value[1]]+i[1]
            parent[i[0]]=value[1]
            heapq.heappush(level,(dist[i[0]],i[0]))
if not check:
    value=-1
    print(value)
