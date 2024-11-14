function Button1(text, background) {
  this.text = text;
  this.background = background;
}
Button1.prototype.element = function() {
  const buttonElement1 = document = document.createElement('button')
  buttonElement1.innerText = this.text;
  buttonElement1.style.background = this.background;
  return buttonElement1;
  }
  const blueButton1 = new Button1("comprar", "blue");
  
  console.log(blueButton1);
  
  console.log("-------------------------------------------------------")
  
  class Button2 {
    constructor(text, background, color) {
      this.text = text;
      this.background = background;
      this.color = color;
    }
    element() {
      const buttonElement2 = document.createElement("button");
      buttonElement2.innerText = this.text;
      buttonElement2.style.background = this.background;
      buttonElement2.style.color = this.color;
      return buttonElement2;
    }
  }
  const blueButton2 = new Button2("comprar", "blue", "color");
  
  console.log(blueButton2);
  console.log(blueButton2.element);
  
  console.log("-------------------------------------------------------")
  
  
  class Button3 {
    constructor(text, background, color) {
      this.text = text;
      this.background = background;
      this.color = color;
    }
    element() {
      const buttonElement3 = document.createElement("button");
      buttonElement3.innerText = this.text;
      buttonElement3.style.background = this.background;
      buttonElement3.style.color = this.color;
      return buttonElement3;
    }
    appendTo(target) {
      const targetElement3 = document.querySelector(target);
      targetElement3.appendChild(this.element());
      console.log(this)
      return targetElement3;
    }
  }
  const blueButton3 = new Button3("comprar", "blue", "color");
  
  console.log(blueButton3.appendTo("body"));
  
  console.log("-------------------------------------------------------")
  
  //Objeto fora
  
  class Button4 {
    constructor(options) {
      this.options = options;
    }
  }
  const optionsBlue4 = {
    backgroundColor: "blue",
    text: "comprar",
    color: "white",
  };
  
  const blueButton4 = new Button4(optionsBlue4);
  console.log(blueButton4);
  
  console.log("-------------------------------------------------------")
  
  //Objeto pelo lado dentro
  class Button5 {
    constructor(options) {
      this.options = options;
    }
  }
  const blueButton5 = new Button5({
    backgroundColor: "blue",
    text: "comprar",
    color: "white",
  });
  console.log(blueButton5);
  
  
  console.log("-------------------------------------------------------")
  
  class Button6 {
    constructor(options) {
      this.options = options;
    }
    static createButton6(text, background) {
      const buttonElement6 = document.createElement("button");
      buttonElement6.innerText = text;
      buttonElement6.style.backgound = background;
      return buttonElement6;
    }
  }
  const optionsBlue6 = {
    backgroundColor: "blue",
    text: "comprar",
    color: "white",
  };
  const blueButton6 = new Button6(optionsBlue6);
  console.log(blueButton6)
  
  const blueButtonStatic6 = Button6.createButton6('click', 'blue')
  console.log(blueButtonStatic6)
  
  
  