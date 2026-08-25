// Open Gazette main JavaScript
document.addEventListener("DOMContentLoaded", () => {

  
  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const themeStorageKey = "open-gazette-theme";

  const savedTheme = localStorage.getItem(themeStorageKey);

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  }

  themeToggle.addEventListener("click", () => {
    const isDarkTheme =
      document.documentElement.getAttribute("data-theme") === "dark";

    if (isDarkTheme) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(themeStorageKey, "light");

      themeToggle.setAttribute("aria-pressed", "false");
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem(themeStorageKey, "dark");

      themeToggle.setAttribute("aria-pressed", "true");
      themeToggle.setAttribute("aria-label", "Switch to light mode");
    }
  });


  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".site-navigation");

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNavigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });


  // Close mobile navigation after selecting a link
  const navigationLinks = document.querySelectorAll(
    ".site-navigation__link"
  );

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNavigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });


  // Newsletter form
  const newsletterForm = document.querySelector("#newsletter-form");
  const newsletterEmail = document.querySelector("#newsletter-email");
  const newsletterMessage = document.querySelector("#newsletter-message");

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = newsletterEmail.value.trim();

    newsletterMessage.classList.remove("is-error", "is-success");

    if (!emailValue) {
      newsletterMessage.textContent =
        "Please enter your email address.";

      newsletterMessage.classList.add("is-error");

      newsletterEmail.focus();

      return;
    }

    if (!newsletterEmail.validity.valid) {
      newsletterMessage.textContent =
        "Please enter a valid email address.";

      newsletterMessage.classList.add("is-error");

      newsletterEmail.focus();

      return;
    }

    newsletterMessage.textContent =
      "Thanks for subscribing to Open Gazette.";

    newsletterMessage.classList.add("is-success");

    newsletterForm.reset();
  });
});