gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content",{

y:80,
opacity:0,
duration:1.5

});

gsap.utils.toArray(".card").forEach(card=>{

gsap.from(card,{

scrollTrigger:{

trigger:card,
start:"top 85%"

},

y:60,
opacity:0,
duration:0.8

})

});

window.addEventListener("scroll",()=>{

const nav=document.getElementById("navbar");

if(window.scrollY>50){

nav.classList.add("scrolled")

}else{

nav.classList.remove("scrolled")

}

});
gsap.from(".footer-col",{

scrollTrigger:{

trigger:".footer",
start:"top 85%"

},

y:60,
opacity:0,
duration:1,
stagger:0.2

});