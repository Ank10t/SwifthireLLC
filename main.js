// const navItems = document.querySelectorAll('#nav__items');
// const openNavBtn = document.querySelectorAll('#open__nav-btn');
// const closeNavBtn = document.querySelectorAll('#close__nav-btn');

// openNavBtn.addEventListener('click', () => {
    
//     navItems.style.display = "flex";
//     openNavBtn.style.display = "none";
//     closeNavBtn.style.display = "inline-block";
// });


const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener('click', () => {
    navItems.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
});





  // swiper

  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  // });




  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // When screen width is 768 pixels or less

      1024:{
        slidesPerView:3,
        spaceBetween:20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // When screen width is 480 pixels or less
      370: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // document.addEventListener("DOMContentLoaded", function () {
  //   var mySwiper = new Swiper(".mySwiper", {
  //     // Swiper options go here
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     loop: true,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // });




// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle avatar animation
function handleAvatarAnimation() {
  const avatars = document.querySelectorAll('.avatar');

  avatars.forEach((avatar) => {
      if (isElementInViewport(avatar) && !avatar.classList.contains('finished-animation')) {
          avatar.classList.add('finished-animation');
          // You can trigger your avatar animation here, e.g., by adding a CSS class.
          // For example: avatar.classList.add('animate-avatar');
          // Then, add event listeners to handle the end of the animation and swap the background image.
          avatar.addEventListener('animationend', () => {
              // Replace the avatar image with the swiper-slide background image.
              // You can access the background image URL using JavaScript and set it accordingly.
              // For example: avatar.style.backgroundImage = 'url(your-background-image-url)';
          });
      }
  });
}

// Listen for scroll events to check if elements are in the viewport
window.addEventListener('scroll', handleAvatarAnimation);
window.addEventListener('resize', handleAvatarAnimation);

// Initial check in case elements are already in the viewport when the page loads
handleAvatarAnimation();



var loader = document.getElementById("preLoader");

window.addEventListener("load",function(){
  loader.style.display = "none";
})





