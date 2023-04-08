$(document).ready(function () {
  // Active nav bar on click
  $("header .header__content nav ul li").click(function () {
    $("header .header__content nav ul li.active").removeClass("active");
    $(this).addClass("active");
  });

  // Scroll to Top Function
  window.addEventListener("scroll", () => {
    // Button
    if (window.scrollY > 100) {
      $(".backToTop").addClass("showButton");
    } else {
      $(".backToTop").removeClass("showButton");
    }

    // Menu - HOME - Active when back to top
    if (window.scrollY <= 100) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:first-of-type").addClass("active");
    }

    // Menu Active when scrolling through sections 
    // ! Not Optimize because not work in responsive mode 
    // ! A little collapse between click and scroll behavior on the navbar
    // todo: Improve later when learning js
    if (window.scrollY >= 720) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:nth-of-type(2)").addClass("active");
    } 
    
    if (window.scrollY >= 2350) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:nth-of-type(3)").addClass("active");
    }  
    
    if (window.scrollY >= 3000) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:nth-of-type(4)").addClass("active");
    }  

    if (window.scrollY >= 4200) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:nth-of-type(5)").addClass("active");
    } 
    
    if (window.scrollY >= 5300) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:nth-of-type(6)").addClass("active");
    } 
    
    if (window.scrollY >= 6000) {
      $("header .header__content nav ul li.active").removeClass("active");
      $("header .header__content nav ul li:nth-of-type(7)").addClass("active");
    }
  });
});