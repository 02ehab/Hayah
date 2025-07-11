window.openMenu = function () {
  document.getElementById("sideMenu").classList.add("open");
}
window.closeMenu = function () {
  document.getElementById("sideMenu").classList.remove("open");
}

// جلب الطلبات من localStorage أو مصفوفة فارغة
let allRequests = JSON.parse(localStorage.getItem("emergencyRequests") || "[]");

// العناصر
const container = document.getElementById("requestsContainer");
const bloodFilter = document.getElementById("bloodFilter");
const cityFilter = document.getElementById("cityFilter");

// عرض الطلبات في الصفحة
function renderRequests(requests) {
  container.innerHTML = "";
  if (requests.length === 0) {
    container.innerHTML = "<p>لا توجد طلبات متاحة حالياً.</p>";
    return;
  }
  requests.forEach(req => {
    const card = document.createElement("div");
    card.className = "request-card";
    card.innerHTML = `
      <div class="blood-type">${req.bloodType}</div>
      <div class="request-info"><strong>الاسم:</strong> ${req.fullName}</div>
      <div class="request-info"><strong>المدينة:</strong> ${req.city}</div>
      <div class="timer">⏳ ${req.timeLeftText}</div>
      <button onclick="alert('سيتم التواصل مع ${req.fullName}')">ساعد الآن</button>
    `;
    container.appendChild(card);
  });
}

// فلترة الطلبات حسب الفصيلة والمدينة
function filterRequests() {
  const blood = bloodFilter.value;
  const city = cityFilter.value.trim();

  const filtered = allRequests.filter(req => {
    const matchBlood = blood ? req.bloodType === blood : true;
    const matchCity = city ? req.city.includes(city) : true;
    return matchBlood && matchCity;
  });

  renderRequests(filtered);
}

// ربط الفلاتر بالأحداث
bloodFilter.addEventListener("change", filterRequests);
cityFilter.addEventListener("input", filterRequests);

// عرض أولي
renderRequests(allRequests);
