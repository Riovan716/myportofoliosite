function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  var navLogo = document.querySelector(".nav-logo");

  if (menuBtn.classList.contains("responsive")) {
    menuBtn.classList.remove("responsive");
  } else {
    menuBtn.classList.add("responsive");
  }

  // Menutup navbar jika logo atau area di luar navbar diklik
  navLogo.addEventListener("click", function () {
    if (menuBtn.classList.contains("responsive")) {
      menuBtn.classList.remove("responsive");
    }
  });

  document.addEventListener("click", function (event) {
    var isClickInsideNav = menuBtn.contains(event.target);
    var isClickInsideNavBtn = document
      .querySelector(".nav-menu-btn")
      .contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickInsideNavBtn &&
      menuBtn.classList.contains("responsive")
    ) {
      menuBtn.classList.remove("responsive");
    }
  });
}

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["bangun", "makan", "mandi", "tidur"],
  loop: true,
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".cv", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//modal box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtons1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

//close icon modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal1 .close-icon").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

//klik diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  } else if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  } else if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
};
