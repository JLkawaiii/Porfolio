/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== DARK/LIGHT MODE TOGGLE ===============*/
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "light-mode" ? "🌙" : "☀️";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
    themeToggle.textContent = "🌙";
  }
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

/*=============== ADD BLUR HEADER ===============*/
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("blur-header");
  } else {
    header.classList.remove("blur-header");
  }
});

/*=============== CONTACT FORM ===============*/
document.getElementById("send-button").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    // Construct the mailto link
    const mailtoLink = `mailto:brillantejohnloyd@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    // Update the hidden mailto link
    const mailtoAnchor = document.getElementById("mailto-link");
    mailtoAnchor.href = mailtoLink;

    // Trigger the mailto link
    mailtoAnchor.click();

    // Success message
    alert("Message sent successfully!");

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  } else {
    alert("Please fill in all fields before sending your message.");
  }
});

/*=============== SCROLL UP BUTTON ===============*/
const scrollUp = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

/*=============== ACTIVE SECTION HIGHLIGHTING ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav__link[href*=${sectionId}]`);

    if (
      navLink &&
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      navLink.classList.add("active-link");
    } else if (navLink) {
      navLink.classList.remove("active-link");
    }
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 200,
  reset: true,
});

sr.reveal(".home, .work, .info, .services, .contact", { interval: 200 });
