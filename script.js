const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', function () {
  menu.classList.toggle('active');
});


const Navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function(){
    let scroll = this.window.scrollY;
    if (scroll > 100){
      Navbar.classList.add('sticky');
    }
    else{
      Navbar.classList.remove('sticky');
    }
})


window.onload = function(){
  new Splide('.MySplide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 2.5,
    gap: '2rem',
    pagination: false,
    breakpoints:{
      1400:{
        perPage:2
      },
      1200:{
        perPage:1.5
      },
      500:{
        perPage:1
      }
    }
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });
}
  
var tstsplide = new Splide('.tst_splide',{
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage:3,
  gap:'2rem',
  pagination: false,
  autoplay:true,
  loop:true,
  perMove:1,
  breakpoints:{
    1200:{
      perPage:2
    },
    900:{
      perPage:1.5
    },
    500:{
      perPage:1
    }
  }
});
tstsplide.mount();


var companies_splide = new Splide('.companies_splide',{
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage:5,
  gap:'1rem',
  pagination: false,
  autoplay:true,
  loop:true,
  perMove:1,
  breakpoints:{
    1400:{
      perPage:4
    },
    900:{
      perPage:3
    },
    768:{
      perPage:2
    },
    500:{
      perPage:1.5
    }
  }
});
companies_splide.mount();