let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const openNavBtn = document.querySelector('#openMobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavBtn.onclick = function () {
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('flex');
}

closeNavBtn.onclick = function () {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('flex');
}