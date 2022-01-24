class Validate {
   constructor(a) {
      this.a = a;
   }
   static isNumber(item) {
      if (isFinite(item)) {
         return true
      }
      return false
   }
   static isInt(item){
    if (Number.isInteger(item)) {
       return true
    } 
    return false 
   }
   static isBoolean(item){
      if (typeof(item) ==='boolean') {
         return true
      }
      return false
   }
   static isArray(item){
      if (Array.isArray(item)) {
         return true
      }
      return false
   }
   static toMoney(item){
      return item.toLocaleString() + '.00';
   }
}


