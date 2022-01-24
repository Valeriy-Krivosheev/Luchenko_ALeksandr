const dataExample = [
   {
      company: 'Microsoft',
      chef: 'Ivan Ivanov',
      country: 'USA'
   },
   {
      company: 'Yandex',
      chef: 'Dmitriy',
      country: 'Russia'
   },
   {
      company: 'Gogle',
      chef: 'John',
      country: 'USA'
   },
   {
      company: 'Mercedes',
      chef: 'Will Gibson',
      country: 'Germany'
   },
   {
      company: 'Burger King',
      chef: 'Winston Smith',
      country: 'Canada'
   }
]

let gridView = new GridView();
gridView.header = 'Hello';
gridView.headerClass = ['header'];
gridView._data = dataExample;
gridView.render();
