
class Dog():
    def __init__(self, name, options):
        if type(options) is dict:
            self.dd = options
        else:
            self.dd = {}
            pass
        self.dd['name'] = name

    def show_color(self):
        if 'color' in self.dd:
            print(self.dd['color'])
        else:
            print('color unknown')


class WhiteDog(Dog):
    def __init__(self, name, options={}):
        super(Dog, self).__init__(name, options)
        #print('white ', options)
        if 'color' not in self.dd:
            self.dd['color'] = 'white'

class BlackDog(Dog):
    def __init__(self, name, options={}):
        #print('black ', options)
        super(Dog, self).__init__(name, options)
        if 'color' not in self.dd:
            self.dd['color'] = 'black'


if __name__ == "__main__":
    wd = WhiteDog('William')
    bd = BlackDog('Benjamin')

    bd.show_color()
    wd.show_color()
