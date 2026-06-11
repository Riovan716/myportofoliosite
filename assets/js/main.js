function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  const navLogo = document.querySelector(".nav-logo");

  if (menuBtn.classList.contains("responsive")) {
    menuBtn.classList.remove("responsive");
  } else {
    menuBtn.classList.add("responsive");
  }

  // Close navbar when clicking the logo
  navLogo.addEventListener("click", function () {
    if (menuBtn.classList.contains("responsive")) {
      menuBtn.classList.remove("responsive");
    }
  });

  // Close navbar when clicking outside the navbar
  document.addEventListener("click", function (event) {
    const isClickInsideNav = menuBtn.contains(event.target);
    const isClickInsideNavBtn = document
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

// Add shadow to header on scroll
function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

window.addEventListener("scroll", headerShadow);

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["a Software Engineer"],
  loop: true,
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  reset: false, // Turn off reset for a smoother, one-time reveal experience
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 150 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 250 });
sr.reveal(".featured-image", { delay: 300 });

/* -- HEADINGS & GRIDS -- */
sr.reveal(".top-header", {});
sr.reveal(".skills-card", { interval: 150 });
sr.reveal(".project-card", { interval: 150 });
sr.reveal(".org-card", { interval: 150 });

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 1500,
  reset: false,
});

srLeft.reveal(".about-card", { delay: 100 });
srLeft.reveal(".contact-card", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 1500,
  reset: false,
});

srRight.reveal(".form-container", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 120, // Adjusted offset to align better with scrolling
      sectionId = current.getAttribute("id");

    const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- DYNAMIC MODAL INTERACTION ----- */
const modalOverlay = document.getElementById("detail-modal");
const modalClose = document.querySelector(".modal-close");
const interactiveCards = document.querySelectorAll(".interactive-card");

// Populate and open modal
interactiveCards.forEach(card => {
  card.addEventListener("click", () => {
    const type = card.getAttribute("data-type");
    const title = card.getAttribute("data-title");
    const subtitle = card.getAttribute("data-subtitle");
    const date = card.getAttribute("data-date");
    const icon = card.getAttribute("data-icon") || "fa-solid fa-laptop-code";
    const detailsRaw = card.getAttribute("data-details");
    const techRaw = card.getAttribute("data-tech");
    const linksRaw = card.getAttribute("data-links");

    // Title group population
    document.getElementById("modal-type").textContent = type.toUpperCase();
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-subtitle").textContent = subtitle || "";
    document.getElementById("modal-date").innerHTML = `<i class="uil uil-calendar-alt"></i> ${date}`;
    document.getElementById("modal-icon").className = icon;

    // Body content construction
    let bodyHTML = "";

    // Bullet points
    if (detailsRaw) {
      try {
        const details = JSON.parse(detailsRaw);
        if (details && details.length > 0) {
          bodyHTML += '<ul class="modal-list">';
          details.forEach(item => {
            bodyHTML += `<li>${item}</li>`;
          });
          bodyHTML += "</ul>";
        }
      } catch (e) {
        console.error("Failed to parse card details JSON", e);
      }
    }

    // Technology Tags
    if (techRaw) {
      const tags = techRaw.split(",");
      bodyHTML += '<div class="modal-tech-group"><h5>Tech Stack</h5><div class="modal-tech-tags">';
      tags.forEach(tag => {
        bodyHTML += `<span>${tag}</span>`;
      });
      bodyHTML += "</div></div>";
    }

    // Action links
    if (linksRaw) {
      try {
        const links = JSON.parse(linksRaw);
        if (links && (links.github || links.live)) {
          bodyHTML += '<div class="modal-links">';
          if (links.github) {
            bodyHTML += `<a href="${links.github}" target="_blank" rel="noopener noreferrer" class="btn modal-btn"><i class="fa-brands fa-github"></i> Repository</a>`;
          }
          if (links.live) {
            bodyHTML += `<a href="${links.live}" target="_blank" rel="noopener noreferrer" class="btn blue-btn modal-btn"><i class="fa-solid fa-earth-americas"></i> Live Website</a>`;
          }
          bodyHTML += "</div>";
        }
      } catch (e) {
        console.error("Failed to parse card links JSON", e);
      }
    }

    document.getElementById("modal-body").innerHTML = bodyHTML;

    // Show modal with animation
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  });
});

// Close modal
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scroll
}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});


