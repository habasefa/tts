from collections import deque
import math
num,left,right=[int(x) for x in input().split()]
level=deque([num])
ans=[]
def getGeneratedNum(num):
    if num==0 or num==1:
        return 1
    value=2**math.floor(math.log2(num)+1)
    return value-1
temp=0
while level:
    n=len(level)
    temp2=temp
    for _ in range(n):
        value=level.popleft()
        left_generated=getGeneratedNum(value//2)
        print(left_generated,temp,temp2)
        print(ans)
        if temp2+left_generated>=right:
            if (value//2)<2:
                ans.append(value//2)
            else:
                level.append(value//2)
            break
        else:
            if temp2+left_generated>=left:
                if (value//2)<2:
                    ans.append(value//2)
                else:
                    level.append(value//2)
                # temp2+=left_generated
            else:
                temp=left
            temp2+=left_generated
        rem=value%2
        if temp2+1==right:
            ans.append(rem)
            break
        else:
            if temp2+1>=left:
                ans.append(rem)
                
            else:
                temp=left
            temp2+=1

                
        if temp2+left_generated>=right:
            if (value//2)<2:
                ans.append(value//2)
            else:
                level.append(value//2)
            break
        else:
            if temp2+left_generated>=left:
                if (value//2)<2:
                    ans.append(value//2)
                else:
                    level.append(value//2)
                # temp2+=left_generated
            else:
                temp=left
            temp2+=left_generated
        temp2+=1
    print(level)
    print(ans)
print(len(ans))
