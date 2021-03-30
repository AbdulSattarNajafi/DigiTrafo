//Collapse Menu and Menu links
function menuToggle() {
  const collBtns = document.querySelectorAll(".collapsible");
  let menuLinks = document.querySelectorAll('.menu_links');
  
  collBtns.forEach(collBtn => {
    collBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const content = this.nextElementSibling;

      const activeContent = document.querySelector('.active_menu');
      if(activeContent) {
        activeContent.classList.remove('active_menu');
      }
      content.classList.toggle('active_menu');
    })
  })
  // let i;
  // for (i = 0; i < collBtns.length; i++) {
  //   collBtns[i].addEventListener("click", function() {
  
  //     this.classList.toggle("active_menu");
  //     const content = this.nextElementSibling;
  //     if (content.style.display === "block") {
  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //     }
  //   });
  // }

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
}
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
}
showMenu();