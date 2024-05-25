#  -- INSTRUCTIONS --
# Write a function that checks whether a given string is a palindrome (reads the same forward and backward).

# -- SOLUTION -- 
def is_palindrome(s):
    # Create pointers to the start and end of the given string.
    start = 0
    end = len(s) - 1

    # Iterate through the string the from start and end while start < end.
    while start < end:
        # If the letters at the current position don't match, return false.
        if s[start] != s[end]:
            return False
        # Update the pointers
        start += 1
        end -= 1

    return True