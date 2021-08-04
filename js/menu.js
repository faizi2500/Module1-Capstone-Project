
const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('mob-nav');
const logo = document.getElementsByClassName('logo-desktop')
const navWidth =document.getElementsByClassName('navigation-container');
var w = document.documentElement.clientWidth || window.innerWidth;
const status = false;



function openMobileMenu() {
  menu.style.display = 'block';
  menu.style.width = '100%';
  openMenu.style.display = 'none'
  closeMenu.style.display = 'block'
  logo.style.display = 'block'
  status = true;
  
}

function closeMobileMenu() {
  menu.style.display = 'none';
  openMenu.style.display = 'block'
  closeMenu.style.display = 'none'
}

function menuCondition () {
  if (w < 768 && status === false) {
    openMobileMenu();
  } else closeMobileMenu;
}


openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

menuCondition()



