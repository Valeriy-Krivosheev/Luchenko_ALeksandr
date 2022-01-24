let button;

class Button {
   constructor(width, height, background, value) {
      this.width = width,
      this.height = height,
      this.background = background,
      this.value = value
   }

   render() {
      button = document.createElement('button');
      button.style.width = this.width + 'px';
      button.style.height = this.height + 'px';
      button.style.background = this.background;
      button.textContent = this.value;
      return button;
   }
}  

const firstButton = new Button(100, 100, 'red', 'firstBtn')
const firstButtonEl = firstButton.render()
document.body.append(firstButtonEl)



