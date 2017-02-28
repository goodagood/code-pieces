
a = 33
b = [1,2,3,4]

triple = """
    this is "triple"
    string, it 'means'
    3 "
    this is a #{a}
    """
triple_a = """ this is one line triple, show a's value is: #{a} \n """
triple_b = """ this is one line triple, show b[1]'s value is: #{b[1]} \n """

double = "
    this is double
    'string'
    "

single = '
    this is 
        "single"
        string
        '

console.log(triple)
console.log(triple_a)
console.log(triple_b)
console.log(double)
console.log(single)

