window.addEventListener('load', () => {
  // Delay the appearance of the overlay and content
  setTimeout(() => {
      document.getElementById('overlay').classList.add('hidden'); // Hide overlay
      document.getElementById('content').classList.add('visible'); // Make content visible
      document.querySelector('.navbar-links').classList.add('visible'); // Animate navbar links
      document.querySelector('.heading').classList.add('visible'); // Animate heading
  }, 1000); 
});

// Ensure navbar links stay in the same position while scrolling
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  var navhr = document.getElementById('nav-hr');

  // Scroll behavior: Maintain the position of navbar and links
  if (window.scrollY > 50) {
      navbar.classList.add('bg-white', 'py-2', 'shadow-md');
      logo.src = "./static/images/logo.png"; 
      logo.classList.remove('h-[198px]', 'w-[198px]');
      logo.classList.add('h-[100px]', 'w-[100px]'); 

      link1.classList.remove('text-white');
      link2.classList.remove('text-white');
      link1.classList.add('text-black');
      link2.classList.add('text-black');

      navhr.style.display = "none";
  } else {
      navbar.classList.remove('bg-white', 'py-2', 'shadow-md');
      logo.src = "./static/images/logo2.png";
      logo.classList.remove('h-[100px]', 'w-[100px]');
      logo.classList.add('h-[198px]', 'w-[198px]');

      link1.classList.remove('text-black');
      link2.classList.remove('text-black');
      link1.classList.add('text-white');
      link2.classList.add('text-white');

      navhr.style.display = "block";
  }
});
