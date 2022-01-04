import sys

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # easy solution (but wont pass cuz too slow)
        # two loops
    
#         if len(prices) == 1:
#             return 0
    
#         maxProf = 0
#         for i in range(len(prices)-1):
#             for j in range(i+1, len(prices)):
#                 maxProf = max(maxProf, prices[j] - prices[i])
        
#         if maxProf < 0:
#             return 0
            
            
#         return maxProf

        # keep track of min price, and compare every         number after with min price
    
        minPrice = sys.maxint
        maxProf = 0
        
        for price in prices:
            if price < minPrice:
                minPrice = price
            elif price > minPrice:
                maxProf = max(price - minPrice, maxProf)
        
        return maxProf