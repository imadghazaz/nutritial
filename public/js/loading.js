const body=document.querySelector('body')
const main=document.querySelector('.main-body')
const load=document.querySelector('.load-wrapper')
const banner=document.querySelector('.banner-erea')
const navbar=document.querySelector('.navbar')
main.classList.add('hide')
load.classList.remove('hide')
window.addEventListener('load',()=>{
    main.classList.remove('hide')
    load.classList.add('hide')
})

const observer=new IntersectionObserver((enteries,observer)=>{
    if(document.readyState === "complete"){
        const [entery]=enteries
        if(!entery.isIntersecting){
            navbar.classList.add('sticky')
        }else navbar.classList.remove('sticky')
    } 
});
observer.observe(banner)