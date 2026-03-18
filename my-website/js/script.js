// SELECT
const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function () {
    const selectedLang = this.value;
    setLanguage(selectedLang);

    // Seçilen dili kaydet (sayfa yenilenince aynı kalsın)
    localStorage.setItem("lang", selectedLang);
});


// SAYFA YÜKLENDİĞİNDE
window.onload = function () {

    // İSİM ANİMASYONU
    const nameElement = document.getElementById('name');
    const name = 'Hüseyin Kaya';
    let i = 0;

    const interval = setInterval(() => {
        nameElement.textContent += name[i];
        i++;
        if (i >= name.length) {
            clearInterval(interval);
        }
    }, 150);


    // KAYITLI DİL VAR MI?
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
        languageSelect.value = savedLang;
        setLanguage(savedLang);
    } else {
        // TARAYICI DİLİ
        const userLang = navigator.language.slice(0, 2);

        if (userLang === "en") {
            languageSelect.value = "en";
            setLanguage("en");
        } else {
            setLanguage("tr");
        }
    }
};


// DATA-TR / DATA-EN SİSTEMİ
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-tr]");

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}
