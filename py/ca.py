
class A:
    def __init__(self):
        self.name = 'class a'

    def tell(self):
        print('A, i am telling you')

class A2(A):
    def speak(self):
        self.tell()
        print('A2, i am speaking to you')


a2 = A2()
a2.speak()
