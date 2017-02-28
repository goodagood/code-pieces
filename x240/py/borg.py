
class Borg(object):
    __shared_state = dict()
    def __init__(self):
        self.__dict__ = self.__shared_state
        # and whatever else you want in your class -- that's all!

        self.o = 'o o o'

    def add(self, name, value):
        self.__shared_state[name] = value

    def bb(self):
        print self.__shared_state

b  = Borg()
b.add('ok', 'who kno')
bb = Borg()

b.bb()
bb.bb()

