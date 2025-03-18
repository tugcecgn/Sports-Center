window.onscroll = function(){
    var navbar = document.getElementById("header");
    var home = document.getElementById("homesection");
    var scrollposition = window.scrollY;/*kullanıcının sayfayı ne kadar kaydırıdığı bilginisini verir.*/
    var homeHeight = header.offsetHeight;/*headerın uzunluk bilgisini alır  */

    if (scrollPosition > homeHeight) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

}
const title = [
    "Why are Your Yoga?",
    "Why you shouldn't work with a group",
    "Train Solo, Shine Strong!",
    "Stretch Your Limits",
]
const images = [
    "./images/yoga.jpg",
    "./images/group.webp",
    "./images/solo.jpg",
    "./images/stret.webp",  
]
const time = [
    "When comes Your Time Yoga",
    "When comes Your Time Group",
    "When comes Your Time Solo",
    "When comes Your Time Stretching",
]
function changeContent(index,clickedbuton){
    document.getElementById("content-title").textContent=title[index];
    document.getElementById("content-images").src=images[index];
    document.getElementById("content-time").textContent=time[index];

    document.querySelectorAll(".btn").forEach(button =>{
        button.classList.remove("active");
    });
    clickedbuton.classList.add("active");


}
