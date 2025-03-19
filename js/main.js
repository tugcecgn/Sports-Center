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

function calculateBMI() {
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");

    let height = parseFloat(heightInput.value) / 100; // cm -> metre
    let weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Lütfen geçerli bir boy ve kilo girin!");
        return;
    }

    let bmi = weight / (height * height);
    console.log("Hesaplanan BMI:", bmi);

    // BMI değerine göre oku konumlandırma (yaklaşık yüzdelik hesaplandı)
    let position = 0;

    if (bmi < 18.5) {
        position = 20; // Zayıf
    } else if (bmi >= 18.5 && bmi < 24.9) {
        position = 32; // Normal
    } else if (bmi >= 25 && bmi < 29.9) {
        position = 47; // Fazla kilolu
    } else if (bmi >= 30 && bmi < 34.9) {
        position = 62;
    }else {
        position = 76; // Obez
    }

    document.getElementById("bmi-arrow").style.left = position + "%";
}

// Enter tuşuna basıldığında hesaplama yap
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Sayfanın yenilenmesini önler
        calculateBMI();
    }
});
