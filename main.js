document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button--catalog');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
      const icon = button.querySelector('.icon');
      icon.style.opacity = 0;
      setTimeout(() => {
        icon.src = '/src/assets/img/menu-open.svg';
        icon.style.opacity = 1;
      }, 150);
    });

    button.addEventListener('mouseout', function () {
      const icon = button.querySelector('.icon');
      icon.style.opacity = 0;
      setTimeout(() => {
        icon.src = '/src/assets/img/menu.svg';
        icon.style.opacity = 1;
      }, 150);
    });
  });


  
});
