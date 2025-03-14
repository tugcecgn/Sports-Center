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