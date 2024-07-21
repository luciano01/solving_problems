firstGrade = int(input("First number?\n"))
secondGrade = int(input("Second number?\n"))
thirdGrade = int(input("Third number?\n"))

weightFirst = 2
weightSecond = 3
weigthThird = 5

average = ((firstGrade * weightFirst) + (secondGrade * weightSecond) + (thirdGrade * weigthThird)) / (weightFirst + weightSecond + weigthThird)

print(f"The average is: {average}")