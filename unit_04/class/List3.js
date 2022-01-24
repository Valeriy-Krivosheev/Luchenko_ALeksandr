class List3 extends List {
   constructor(item, cssClass) {
      super(item)
      this.cssClass = cssClass;
   }
   render() {
      super.render()
      this.cssClass.forEach(classes => ul.classList.add(classes));
   }
}
const MyList = new List3(['one', 'one', 'one', 'one',], ['text-center', 'bold', 'text-red'])
const MyList1 = MyList.render()