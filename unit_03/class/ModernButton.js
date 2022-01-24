class ModernButtons extends Button {
   constructor(width, height, background, value, borderRadius) {
      super(width, height, background, value)
      this.borderRadius = borderRadius
   }
   render() { 
      super.render()
      button.style.borderRadius = this.borderRadius + 'px';
      return button
   }
}
const secondButton = new ModernButtons(150, 150, 'blue', 'secondBtn', 50)
const secondButtonEl = secondButton.render()
document.body.append(secondButtonEl)

