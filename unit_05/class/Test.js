class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

const example = new Test
example.testProp = 'Hello'
console.log(example);
console.log(example.testProp);