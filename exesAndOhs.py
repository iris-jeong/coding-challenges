#  -- INSTRUCTIONS --
#  Check to see if a string has the same amount of 'x's and 'o's. 
# The method must return a boolean and be case insensitive. The string can contain any char.

# /* SOLUTION */
def xo(s):
    # Create a dictionary that maps the x and o to its corresponding number of occurrences.
    occurrences = {'x': 0, 'o': 0}

    # Make it case insensitive.
    lowercaseS = s.lower()
    
    # Iterate through the string and count each occurrence of x and o.
    for char in lowercaseS:
        if char == 'x':
            occurrences['x'] += 1
        elif char == 'o':
            occurrences['o'] += 1
        else:
            continue
            
    # Return whether the occurrences are equal.
    return occurrences['x'] == occurrences['o']
        