// Sayfa yüklenir yüklenmez isim animasyonu
window.onload = function() {
    const nameElement = document.getElementById('name');
    const name = 'Hüseyin Kaya';
    let i = 0;
    const interval = setInterval(() => {
        nameElement.textContent += name[i];
        i++;
        if (i >= name.length) {
            clearInterval(interval);
        }
    }, 150); // Her 150ms'de bir harf
};