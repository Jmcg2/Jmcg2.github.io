//Smooth Scroll to
function smoothScrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

//Set light/dark preset
var currentTheme = "dark";

//Check if darkmode preference is set in cookie
function checkCookies() {
    document.cookie = "darkMode=true";
    currentTheme = getCookie("darkMode");
}

//Check 

//Toggle between light and dark theming
function lightDark() {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    const oldClass = currentTheme === "dark" ? "fa-sun" : "fa-moon";
    const newClass = currentTheme === "dark" ? "fa-moon" : "fa-sun";

    setCookies();

    document.getElementById("top").setAttribute("data-theme", newTheme);
    document.getElementById("toggleIcon").classList.add(newClass);
    document.getElementById("toggleIcon").classList.remove(oldClass);

    currentTheme = newTheme;
}

//Set new cookie
function setCookies(){
    document.cookie = currentTheme === "dark" ? "darkMode=false" : "darkMode=true";
}