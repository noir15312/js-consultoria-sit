gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".legal-section").forEach(section => {

gsap.from(section,{

scrollTrigger:{
trigger:section,
start:"top 85%"
},

y:50,
opacity:0,
duration:0.8

});

});


window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

document.querySelector(".progress-bar").style.width = progress + "%";

});