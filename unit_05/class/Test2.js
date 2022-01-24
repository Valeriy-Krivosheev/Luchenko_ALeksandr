class Test2 {
    set testProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    setTestProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    get testProp() {
        return this._testProp;
    }
}
const example2 = new Test2;
example2.testProp = 22
console.log(example2.testProp = 'bbb'); 
console.log(example2);
console.log(example2.testProp = ''); 
console.log(example2);
console.log(example2.setTestProp('')); 
console.log(example2);
console.log(example2.testProp);