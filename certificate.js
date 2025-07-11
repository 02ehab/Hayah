// قائمة الشات في الهاتف
window.openMenu = function () {
  document.getElementById("sideMenu").classList.add("open");
};

window.closeMenu = function () {
  document.getElementById("sideMenu").classList.remove("open");
};

// استخراج اسم المتبرع من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "متبرع كريم";

// عرض الاسم والتاريخ على الشهادة (إن وُجدت العناصر)
const donorNameEl = document.getElementById("donorName");
if (donorNameEl) donorNameEl.textContent = name;

const dateEl = document.getElementById("currentDate");
if (dateEl) dateEl.textContent = new Date().toLocaleDateString("ar-EG");

// تحميل الشهادة كـ PDF
window.downloadPDF = function () {
  const element = document.getElementById("certificate");

  const options = {
    margin:       0.5,
    filename:     `شهادة شكر - ${name}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
};
