removeNonUppercase :: [Char] -> [Char]  
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]   

factorial :: Integer -> Integer
factorial n = product [1..n]

circumference :: Double -> Double
circumference x = 2.0 * pi * x
