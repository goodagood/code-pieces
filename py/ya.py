# yield

import random

def zgen():
    r = random.random()
    while r < 0.99:
        yield r
        r = random.random()
