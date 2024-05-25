#  -- INSTRUCTIONS --
#  Given the triangle of consecutive odd numbers:
#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
# ...
# Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
# 
# 1 -->  1
# 2 --> 3 + 5 = 8

# -- SOLUTION -- 
def row_sum_odd_numbers(n):
    # Calculate the first number in the nth row.
    start = n * n - n + 1
        
    # Calculate the sum of the nth row.
    row_sum = 0
    for i in range(n):
        row_sum += start + 2 * i
        
    return row_sum
    