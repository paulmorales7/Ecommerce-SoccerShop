
function toggleMenu() {
    var menuBox = document.getElementById('nav-menu');  
    var navLink = document.querySelectorAll('.nav__link');

    if(menuBox.style.display == "block") { 
      menuBox.style.display = "none";
    }
    else {
      menuBox.style.display = "block";
    }

    function linkAction(){
        menuBox.style.display = "none"
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))
  }

  const sections = document.querySelectorAll('section[id')

  window.addEventListener('scroll', scrollActive)

  function scrollActive(){
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('nav__menu a[href*='+ sectionId +']').classList.add('active')
              
          }else{
            document.querySelector('nav__menu a[href*='+ sectionId +']').classList.remove('active')
          }
      })
  }

  window.onscroll = ()=>{
      const nav = document.getElementById('header')
        if(this.scrollY >= 200) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header')
    }