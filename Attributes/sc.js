function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("tk-show") == -1) {
      x.className += " qt-show";
    } else { 
      x.className = x.className.replace(" qt-show", "");
    }
  }