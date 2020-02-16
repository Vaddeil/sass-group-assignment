const navSlide = () => {
  const menu = document.querySelector('.menubutton');
  const nav = document.querySelector('#mainnav-mobile');

  menu.addEventListener('click', function() {
    nav.classList.toggle('mainnav-mobile-active');
  });
};

navSlide();
