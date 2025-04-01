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
    themeToggle.textContent = "🌙";
  } else {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
    themeToggle.textContent = "☀️";
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

/*=============== EMAIL JS ===============*/
// Example: Sending email using EmailJS
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Replace with your EmailJS service and template IDs
    emailjs
      .sendForm("service_id", "template_id", "#contact-form", "user_id")
      .then(
        () => {
          alert("Message sent successfully!");
          contactForm.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  });
}

document.getElementById("send-button").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  } else {
    alert("Please fill in all fields.");
  }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav__link[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
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
  reset: true, // Animation repeats on scroll
});

sr.reveal(".home, .work, .info, .services, .contact", { interval: 200 });
