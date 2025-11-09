const slideNavigator = (name) => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
      slide.classList.remove('active');
      if (slide.classList.contains(name)) {
        slide.classList.add('active');
      }
    });
  };
  
  // switch background buttons
  window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        slideBtnList.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        slideNavigator(this.getAttribute('data-target'));
      });
    });
  
    // затваря мобилното меню при клик на линк
    document.querySelectorAll('.nav-mobile .nav-btn').forEach(a => {
      a.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        const navMobile = document.querySelector('.nav-mobile');
        menu.classList.remove('active');
        navMobile.classList.remove('active');
      });
    });
  });
  
  // reset header to initial state
  const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
  };
  
  // toggle menu
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
  };
  

  const BREAKPOINT = 768;

function closeMobileMenuOnDesktop() {
  if (window.innerWidth > BREAKPOINT) {
    document.querySelector('.menu')?.classList.remove('active');
    document.querySelector('.nav-mobile')?.classList.remove('active');
  }
}
window.addEventListener('resize', closeMobileMenuOnDesktop);
window.addEventListener('orientationchange', closeMobileMenuOnDesktop);







/* ===== Section Navigator (About / Services / Offers / Contact) ===== */
const sectionNavigator = (name) => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('section-show'));
  
    const target = document.querySelector('#' + name);
    if (target) {
      target.classList.add('section-show');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  /* свързваме бутоните от хедъра и мобилното меню */
  function bindSectionLinks(){
    const links = document.querySelectorAll('.nav .nav-btn[data-target], .nav-mobile .nav-btn[data-target]');
    links.forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
  
        // активен клас в навигацията
        document.querySelectorAll('.nav .nav-btn, .nav-mobile .nav-btn').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
  
        const target = a.getAttribute('data-target');
        sectionNavigator(target);
  
        // затваряме мобилното меню ако е отворено
        const menu = document.querySelector('.menu');
        const navMobile = document.querySelector('.nav-mobile');
        menu?.classList.remove('active');
        navMobile?.classList.remove('active');
      });
    });
  
    // Home (без data-target) -> връща към банера и крие секциите
    document.querySelectorAll('.nav .nav-btn:not([data-target])').forEach(home => {
      home.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('section-show'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }
  
  /* стартово състояние: показваме About 
  window.addEventListener('load', () => {
    // показваме About при първоначално зареждане
    sectionNavigator('about');
    // bind за линковете
    bindSectionLinks();
  });*/
  


  const scrollBtn = document.getElementById('scrollTopBtn');
const aboutSection = document.querySelector('#about');

window.addEventListener('scroll', () => {
  const triggerPoint = aboutSection.offsetTop - 200;

  if (window.scrollY > triggerPoint){
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});


