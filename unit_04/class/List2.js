class List2 extends List {
   constructor(item,cssClass) {
      super(item)
      this.cssClass = cssClass
   }

   render() {
      super.render()
      ul.classList.add(this.cssClass)
   }
}

const modernList = new List2( ['five', 'six', 'seven', 'eight'], 'myStyle')
const modernList2 = modernList.render()