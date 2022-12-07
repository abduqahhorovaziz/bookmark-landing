const openNavBtn = document.querySelector("#openMobileNav");
const closeNavBtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");
const body = document.body;

openNavBtn.onclick = function () {
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("flex");
  body.classList.add("scroll-none")
};

closeNavBtn.onclick = function () {
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("flex");
  body.classList.remove("scroll-none")
};

// ACCORDION

let accTitle = document.getElementsByClassName("acc-heading");
let accIcon = document.getElementsByClassName("acc-icon");
let accContent = document.getElementsByClassName("acc-content");
let singleMode = true;

for (let j = 0; j < accContent.length; j++) {
  let realHeight = accContent[j].offsetHeight;
  accContent[j].setAttribute("data-height", realHeight + "px");
  accContent[j].style.height = 0;
}

for (let i = 0; i < accTitle.length; i++) {
  accTitle[i].onclick = function () {
    let openedAcc = this.getAttribute("href").replace("#", "");

    if (this.classList.contains("active")) {
      this.classList.remove("active");
      document.getElementById(openedAcc).style.height = 0;

      return false;
    }

    if (singleMode) {
      for (let k = 0; k < accTitle.length; k++) {
        accTitle[k].classList.remove("active");
      }

      for (let j = 0; j < accContent.length; j++) {
        accContent[j].style.height = 0;
      }
    }

    this.classList.add("active");

    document.getElementById(openedAcc).style.height =
      accContent[i].getAttribute("data-height");

    return false;
  };
}
