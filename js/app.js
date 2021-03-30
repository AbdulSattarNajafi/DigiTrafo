//Collapse Menu and Menu links
function menuToggle() {
  const collBtns = document.querySelectorAll(".collapsible");
  const menuLinks = document.querySelectorAll('.menu_links');
  
  collBtns.forEach(collBtn => {
    collBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const content = this.nextElementSibling;
      const iconRight = this.children[1];

      const iconDown = document.querySelector('.active_icon')
      const activeContent = document.querySelector('.active_menu');

      if(activeContent) activeContent.classList.remove('active_menu');
      if(iconDown) iconDown.classList.remove('active_icon')
      
      iconRight.classList.toggle('active_icon')
      content.classList.toggle('active_menu');
    })
  })

  menuLinks.forEach(links => {
    links.addEventListener('click', (e) => {
      e.preventDefault();
      let currentLink = e.currentTarget;
      const active = document.querySelector('.active')
      if(active) {
        active.classList.remove('active')
      }
        currentLink.classList.toggle('active')
    })
  })
};
menuToggle();

//Show and Hide Menu
function showMenu() {
  const showBtn = document.querySelector('#toggle_btn');
  const hideBtn = document.querySelector('#close_menu');
  const navMenu = document.querySelector('.menu')
  showBtn.addEventListener('click', () => {
    navMenu.classList.add('show_navmenu');
  });

  hideBtn.addEventListener('click', () => {
    navMenu.classList.remove('show_navmenu');
  });
};
showMenu();