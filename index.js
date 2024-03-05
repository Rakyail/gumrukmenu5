function redirectToMenu() {
  window.location.href = 'menu.html';
}
// İnstagram ikonuna tıklanınca yönlendirme işlemi
document.getElementById('instagramIcon').addEventListener('click', function () {
  // Yönlendirme işlemi
  window.open('https://www.instagram.com/', '_blank'); // Instagram sayfasını yeni sekmede aç
});

// Telefon ikonuna tıklanınca telefon uygulamasını başlatma işlemi
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('phoneIcon').addEventListener('click', function () {
    // Burada yapılacak işlemler
    window.open('tel:+902122442252');
  });
});

// Mail ikonuna tıklanınca yönlendirme işlemi
document.getElementById('mailIcon').addEventListener('click', function () {
  window.open('mailto:info@karakoygumruk.com.tr');
});

// ingilizce sayfaya yönlendırıldı

document.getElementById('select').addEventListener('change', function () {
  var selectBox = document.getElementById('select');
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  window.location.href = selectedValue;
});
