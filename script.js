$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // Scroll down sticky navbar script end
    
    // Scroll up Button script start
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Scroll up Button script end
    
    // Fade In & Fade Out Elements on Scroll script start
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
    // Fade In & Fade Out Elements on Scroll script end
  });
  
  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end
  
  // animation Script for display
  const animationScript = ["I'm a Full-time Freelancer", "I'm a Level 2 Seller on Fiverr", "I'm a Web Analytics Expert", "My expertise in Facebook Pixel Setup", "My expertise in Conversion API Setup", "My expertise in Google Analytics 4 Setup", "My expertise in GA4 Custom Report Creation", "My expertise in Google Ads Conversion Tracking","My expertise in Enhanced Conversion issue fix", "My expertise in Google Consent Mode V2", "My expertise in Server Side Tracking"];
  
  // Typing animation script start
  new Typed(".typing", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
  });
  
  new Typed(".typing2", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // Typing animation script End
  
  // toggle menu/navbar script start
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // toggle menu/navbar script end
  
  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById('year').textContent = currentYear;

// সাইট লোড হলে প্রগ্রেস বারের এনিমেশন শুরু হবে
window.addEventListener('load', function() {
  const progressBars = document.querySelectorAll('.progress');
  
  progressBars.forEach(function(progressBar) {
    const width = progressBar.style.width; // প্রগ্রেসের % পাওয়া
    progressBar.style.transition = 'none'; // এনিমেশন বন্ধ করে কিছু সময়ের জন্য
    progressBar.style.width = '0%'; // শুরুতে 0% করে দেওয়া
    setTimeout(function() {
      progressBar.style.transition = 'width 2s ease-out'; // তারপর এনিমেশন চালু করা
      progressBar.style.width = width; // আসল প্রগ্রেস % সেট করা
    }, 100); // একটু দেরি করে এনিমেশন শুরু হবে
  });
});
$(document).ready(function(){
  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 3,              // Show 3 cards on desktop
    loop: true,            // Infinite loop enabled
    margin: 20,            // Margin between cards
    autoplay: true,        // Auto-scroll enabled
    autoplayTimeout: 1000, // Auto-scroll interval (1 second)
    autoplayHoverPause: true,  // Pause autoplay on hover
    responsive: {
      0: {
        items: 1      // Show 1 card on mobile
      },
      768: {
        items: 3      // Show 3 cards on tablet and above
      }
    }
  });
});



// JavaScript to control the manual navigation (optional)
let index = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  index = (index + direction + totalSlides) % totalSlides;
  const wrapper = document.querySelector('.carousel-wrapper');
  wrapper.style.transform = `translateX(-${(index * 100) / totalSlides}%)`;
}


