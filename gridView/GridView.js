class GridView {

   // _tableClass - css класс для оформления формы
   // data - выходные данные
   // _attribute - управление данными
   // _element - куда выводить таблицу
   // _header - заголовок страницы
   // _headerClass - css класс для заголовка
   constructor() {
      this._header = '';
      this._headerClass = [];
      this._data = []
      this._tableClass = [];
      this._element = 'body';
      this._attribute = []
   }
   // Method set header
   set header(header) {
      if (typeof header === 'string' && header.trim() !== "") {
         this._header = header.trim()
         return true
      }
      return false
   }
   set headerClass(headerClass) {
      if (typeof headerClass === 'object') {
         this._headerClass = headerClass
         return true
      }
      return false
   }
   // Method set element
   set element(element) {
      if (document.querySelector(element)) {
         this._element = element
         return true
      }
      return false
   }

   // Method for showing GridViewTable
   render() {
      // show header
      if (this._header !== '') {
         const header = document.createElement('h1')
         header.textContent = this._header
         this._headerClass.forEach(cssClass => {
            header.classList.add(cssClass)
         });
        document.querySelector(this._element).append(header)
      }
      const table = document.createElement('table')
      this._tableClass.forEach(tableClass => {
         table.classList.add(tableClass)
      });
   }
}