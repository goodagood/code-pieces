import Data.List
import System.IO

minInt = minBound :: Int

modEx  = mod 5 4
modEx2 = 5 `mod` 4

num9 = 9 :: Int
sqrt9 = sqrt (fromIntegral num9)


someInput = do
    putStrLn "What is your name?"
    name <- getLine
    putStrLn ("Hello " ++ name)

addMe :: Int -> Int -> Int

-- 
addMe x y = x + y
