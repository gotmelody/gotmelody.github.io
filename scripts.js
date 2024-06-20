function toggleTopnav() {
  var topnav = document.getElementById("myTopnav");
  var subnav = document.getElementById("mySubnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }

  if (subnav.className === "subnav") {
    subnav.className += " responsive";
  } else {
    subnav.className = "subnav";
  }
}
