
import Data.List

numUniq :: (Eq a) => [a] -> Int
numUniq =  length . nub


