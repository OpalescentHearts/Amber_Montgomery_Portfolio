var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (function(button) {
    return function() {
      var a = button.parentElement.querySelector("h3 a");
      a.innerHTML = 'clicked';
    };
  })(buttons[i]));
}