// Kullanıcıdan isim al
let userName = prompt("Lütfen adınızı giriniz:");

// Eğer boş ise 'Misafir' yaz
if (!userName || userName.trim() === "") {
  userName = "Misafir";
}

// İsmi ekrana yaz
document.getElementById("myName").innerText = userName;

// Saat ve gün fonksiyonu
function showTime() {
  const date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // Tek haneli ise başına 0 ekle
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Haftanın günleri
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ];

  const day = days[date.getDay()];
  const timeString = `${h}:${m}:${s} ${day}`;

  document.getElementById("myClock").innerText = timeString;

  // Her saniye tekrar çalıştır
  setTimeout(showTime, 1000);
}

// Fonksiyonu başlat
showTime();
