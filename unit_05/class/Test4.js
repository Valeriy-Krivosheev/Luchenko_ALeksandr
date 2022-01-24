class Test4 extends Test2 {
   set testProp(a) {
      this._testProp = a * 10;
   }
   set testValue(a) {
      this._testValue = a
   }
   get testValue() {
      if (this._testValue > 100) {
         return this._testValue
      }
      return false
   }
}

const example4 = new Test4
console.log(example4);


example4.testValue = 101
console.log(example4.testValue);