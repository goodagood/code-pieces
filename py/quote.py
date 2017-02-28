
class Quote:
    def __getattribute__(self, name):
        print('--getattribute--')
        return name

    def __getattr__(self, name):
        print('--getattr--')
        return name

    '''
    def foo(self):
        return 'foo'
    '''


if __name__ == "__main__":
    q = Quote()
    print (q.foo)
    #print (q.foo())
    print (type(q.boo), ' : ', q.boo)
