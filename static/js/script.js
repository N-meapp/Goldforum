  // Handle page load animations
  window.addEventListener('load', () => {
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








//   window.addEventListener('load', () => {
//     setTimeout(() => {
//         document.getElementById('loader').style.display = 'none';
//         document.getElementById('content').classList.add('visible'); // (if you have content hidden initially)
//     }, 6000); // 2 seconds, matching the animation duration
// });








const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        // Check if the clicked question's answer is already visible
        const isAnswerVisible = !answer.classList.contains('hidden');

        // Close all answers first
        faqQuestions.forEach(otherQuestion => {
            const otherAnswer = otherQuestion.nextElementSibling;
            const otherIcon = otherQuestion.querySelector('.faq-icon');
            if (otherAnswer !== answer) {
                otherAnswer.classList.add('hidden'); // Hide other answers
                otherIcon.classList.remove('rotate-180'); // Reset icon rotation
                otherAnswer.classList.remove('bg-[#56433d]', 'text-white'); // Reset styles
            }
        });

        // If the clicked question's answer was not visible, open it
        if (!isAnswerVisible) {
            answer.classList.remove('hidden'); // Show the answer
            icon.classList.add('rotate-180'); // Rotate the icon
            answer.classList.add('bg-[#56433d]', 'text-white'); // Add styles to the answer
        } else {
            // If the clicked answer was already visible, just toggle it off
            answer.classList.add('hidden');
            icon.classList.remove('rotate-180');
            answer.classList.remove('bg-[#56433d]', 'text-white');
        }
    });
});
