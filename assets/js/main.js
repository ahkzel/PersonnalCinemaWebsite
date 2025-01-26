function change_theme() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "sombre");
        document.getElementById("theme-button").textContent = "Thème sombre";
    } 
    else {
        localStorage.setItem("theme", "clair");
        document.getElementById("theme-button").textContent = "Thème clair";
    }
}

function load_saved_theme() {
    const theme = localStorage.getItem("theme");

    if (theme === "sombre") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-button").textContent = "Thème sombre";
    }
    else {
        document.getElementById("theme-button").textContent = "Thème clair";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    load_saved_theme();
});