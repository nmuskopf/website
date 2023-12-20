function toggleNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
      document.body.scrollTop = 0; // for Safari
      document.documentElement.scrollTop = 0; // for everyone else
    } else {
      x.className = "nav";
    }
  }

  function getRandomBanner() {
    var x = document.getElementById("main-banner");
    var rand = Math.ceil(Math.random()*3);
    if (x.className === 'cool-edge') {
      x.style.setProperty('background-image','url(assets/img/header-'+rand+'.jpg)');
    }
  }