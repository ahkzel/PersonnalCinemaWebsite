document.addEventListener('DOMContentLoaded', function() {
    load_saved_theme();
})

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

function changeUrl(){
    const nomFilm = document.getElementById('oeuvre-name').value;
    const lienImdb = document.getElementById('lienImdb');
    const lienSenscritique = document.getElementById('lienSenscritique');
    const lienAllocine = document.getElementById('lienAllocine');
    const lienIgn = document.getElementById('lienIgn');

    if (nomFilm) {
        /* encode le nom du film en URL sécurisé */
        const url_format_nomFilm = encodeURIComponent(nomFilm);

        lienImdb.href = `https://www.imdb.com/find/?q=${url_format_nomFilm}&ref_=nv_sr_sm`;
        lienImdb.textContent = `page ${nomFilm} sur IMDb`;

        lienSenscritique.href = `https://www.senscritique.com/search?query=${url_format_nomFilm}`;
        lienSenscritique.textContent = `page ${nomFilm} sur SensCritique`;

        lienAllocine.href = `https://www.allocine.fr/rechercher/?q=${url_format_nomFilm}`;
        lienAllocine.textContent = `page ${nomFilm} sur AlloCiné`;

        lienIgn.href = `https://fr.ign.com/se/?model=&q=${url_format_nomFilm}`;
        lienIgn.textContent = `page ${nomFilm} sur IGN`;

    }
};