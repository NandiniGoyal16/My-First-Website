document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function showLoginMessage() {
  var message = document.querySelector('.success-message');
  
  message.classList.add('success-message-show');

  setTimeout(function() {
      message.classList.remove('success-message-show');
  }, 5000); 
  }

const header = document.querySelector("#header");

header.addEventListener("mousemove", (e) => {
  header.style.backgroundPositionX = -e.pageX / 3 + "px";
  header.style.backgroundPositionY = -e.pageY / 3 + "px";
});
