// Get the container element
var anchorContainer = document.getElementById("activeness");

// Get all buttons with class="btn" inside the container
var anchor = anchorContainer.getElementsByClassName("super-anchor");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function maindrop(){
  var ac = document.getElementById("activeness");
  if (ac.className === "maindrop") {
    ac.className += " responsive-main"
  }
  else {
    ac.className = "maindrop"
  }
}
