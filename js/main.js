// navbar aşağıya indiğinde arka planının rengini değiştirmek için kullanılan kod
window.onscroll = function () {
    var navbar = document.getElementById("header");
    if (!navbar) return; 
    var viewportHeight = window.innerHeight; 

    var scrollPosition = window.scrollY;
    console.log("Scroll Position:", scrollPosition); 
    if (scrollPosition >= viewportHeight) { 
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
};

// butonlara tıklanıldığında yazı ve resimlerin değişmesini sağlayan js kodu
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
//duruma göre ya active css ekler ya da var olanı çıktır.
    document.querySelectorAll(".btn").forEach(button =>{
        button.classList.remove("active");
    });
    clickedButton.classList.add("active");
}

//kullanıcıdan aldığı verilere göre bmi hesaplar ve ok ile resimdeki kısımları gösterir.
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
        position = 20; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        position = 32; 
    } else if (bmi >= 25 && bmi < 29.9) {
        position = 47;
    } else if (bmi >= 30 && bmi < 34.9) {
        position = 62;
    }else {
        position = 76; 
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
