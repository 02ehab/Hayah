window.openMenu = function () {
  document.getElementById("sideMenu").classList.add("open");
}

window.closeMenu = function () {
  document.getElementById("sideMenu").classList.remove("open");
}
 function openMenu() {
      document.getElementById("sideMenu").classList.add("open");
    }
    function closeMenu() {
      document.getElementById("sideMenu").classList.remove("open");
    }

    function donateNow(bloodType, hospital) {
      const message = document.getElementById("message");
      message.textContent = `شكرًا لك على رغبتك بالتبرع لفصيلة ${bloodType} في ${hospital}! سيتم التواصل معك قريبًا.`;
      message.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }