window.onscroll = function () {
    var navbar = document.getElementById("header");
    if (!navbar) return; // Navbar bulunamazsa kod çalışmayı durdurur.

    var scrollPosition = window.scrollY; // Kullanıcının kaydırdığı mesafe
    var viewportHeight = window.innerHeight; // Ekran yüksekliği (100vh)

    console.log("Scroll Position:", scrollPosition); // Konsolda kaydırma mesafesini kontrol et

    if (scrollPosition >= viewportHeight) { // 100vh (tam ekran) aşağı inildiyse
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
};


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
function changeContent(index,clickedButton){
    document.getElementById("content-title").textContent=title[index];
    document.getElementById("content-images").src=images[index];
    document.getElementById("content-time").textContent=time[index];

    document.querySelectorAll(".btn").forEach(button =>{
        button.classList.remove("active");
    });
    clickedButton.classList.add("active");


}
