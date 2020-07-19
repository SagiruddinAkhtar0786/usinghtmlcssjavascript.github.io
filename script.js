burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');



burger.addEventListener('click',()=>{
    console.log("success")

    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('visibility-resp');
    navlist.classList.toggle('visibility-resp');

});


// function Myfunction(){
//     console.log("success");
//     var menu = document.getElementsByClassName("visibility-resp");
//     if(menu.style.opacity == 1){
//         menu.style.opacity = 0;
//     }
//     else{
//         menu.style.opacity=1;
//     }
// }