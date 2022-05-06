const button = document.querySelector('.burger-btn');
const sideBar = document.querySelector('.sideBar');
const close = document.querySelector('.closeMenu');
const header = document.querySelector('.header');
const mainDiv = document.querySelector('.maindiv');
const bgLayer = document.getElementById("bgLayer");


button.addEventListener('click', function(){
   sideBar.classList.add('mobileSideBar');
   mainDiv.classList.add('backgroundColor');
   header.classList.add('backgroundColor');
   bgLayer.style.display = "block"
   
});

close.addEventListener('click', function(){
    sideBar.classList.remove('mobileSideBar');
    bgLayer.style.display = "none"
})

bgLayer.addEventListener("click", () => {
    bgLayer.style.display = "none";
    sideBar.classList.remove('mobileSideBar');
})