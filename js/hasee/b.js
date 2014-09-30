
function test(str){
    switch (str){
        case 'abc':
            console.log('abc');
            break;
        case 'www':
        case 'and':
        case 'def':
            console.log(' --- ');
            break;
        default:
            console.log('defaults');
    }
}

test('abc');
test('www');
test('tom');
test('and');
