let ul;
class List {
   constructor(item) {
      this.item = item
   }
   render() {
      ul = document.createElement('ul')
      document.body.append(ul)
      this.item.forEach(items => {
      const li = document.createElement("li")
      li.textContent = items
      ul.append(li)
      });
   }
}

const newList = new List(['one', 'two', 'three', 'four',])
const newList1 = newList.render()


