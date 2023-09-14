const slider=document.querySelector('.slider');
const slides=document.querySelectorAll('.slide1');
const prebutton=document.querySelector('.pre_button');
const nextbutton=document.querySelector('.next_button');
const baricon=document.querySelector('.bar-icon');
const dropdown=document.querySelector('.dropdown-container');
const xmark=document.getElementById('xmark');
const subdropdown1=document.querySelector('.subdropdown-1');
const subdrop=document.querySelector('.sub-dropdown');
const subdropdown2=document.querySelector('.subdropdown-2');
const subdrop1=document.querySelector('.sub-dropdown2');
const smpageslink=document.querySelector('.sm-pages-link');
const lipageslink=document.querySelector('.li-pages-link');
const smlistning=document.querySelector('.sm-listning');
const smblog=document.querySelector('.sm-blog');
const smlistning1=document.querySelector('.sm-listning-1');
const smblog1=document.querySelector('.sm-blog-1');
const smmaindropdown=document.querySelector('.sm-maindropdown2');
const smsubdropdown2=document.querySelector('.sm-subdropdown2');
const smmaindropdown2=document.querySelector('.sm-maindropdown2 i');

const navigationStyle=document.querySelector('.navigation-style');
let slideindex=0;
slides[slideindex].classList.add('active');
prebutton.addEventListener('click',()=>{
    slides[slideindex].classList.remove('active');
if(slideindex===0){
    slideindex=slides.length-1;
}
else{
    slideindex=slideindex-1;
}
slides[slideindex].classList.add('active');
slider.style.transform= `translateX(-${slideindex*100}%)`;
     
})
nextbutton.addEventListener('click',()=>{
slides[slideindex].classList.remove('active');
if(slideindex===slides.length-1){
    slideindex=0;
}
else{
    slideindex=slideindex+1;
}
slides[slideindex].classList.add('active');
slider.style.transform= `translateX(-${slideindex*100}%)`;
})
baricon.addEventListener('click',()=>{
    if(dropdown.style.left==='-300px'){
        dropdown.style.left="0px"
    }
    else{
        dropdown.style.left="-300px";
    }
})
xmark.addEventListener('click',()=>{
dropdown.style.left='-300px';
})
subdropdown1.addEventListener('click',()=>{
    if(subdrop.style.display==='none'){
        subdrop.style.display="block";
    }
    else{
        subdrop.style.display="none";
    }
})
subdropdown2.addEventListener('click',()=>{
    if(subdrop1.style.display==='none'){
        subdrop1.style.display="block";
    }
    else{
        subdrop1.style.display="none";
    }
})
lipageslink.addEventListener('click',()=>{
    if(smpageslink.style.display==="none"){
        smpageslink.style.display="block";
    }
    else{
        smpageslink.style.display="none";
    }
})
smlistning.addEventListener('click',()=>{
    if(smlistning1.style.display==="none"){
        smlistning1.style.display="block"
    }
    else{
        smlistning1.style.display="none"
    }
})
smblog.addEventListener('click',()=>{
    if(smblog1.style.display==="none"){
        smblog1.style.display="block"
    }
    else{
        smblog1.style.display="none"
    }
})
smmaindropdown.addEventListener('click',()=>{
    if(smsubdropdown2.style.display==="none"){
        smsubdropdown2.style.display="block"
        smmaindropdown2.style.rotate="180deg"
    }
    else{
        smsubdropdown2.style.display="none";
        smmaindropdown2.style.rotate="90deg"
    }
})
const Header=document.getElementsByTagName('header');
window.onscroll=function(){
    if(document.documentElement.scrollTop>50){
        navigationStyle.style.opacity='1';
    }
    else{
        navigationStyle.style.opacity='0.3'
    }
}