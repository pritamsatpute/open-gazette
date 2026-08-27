// Open Gazette main JavaScript
document.addEventListener("DOMContentLoaded", () => {


  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const themeStorageKey = "open-gazette-theme";

  if (themeToggle) {
    const savedTheme = localStorage.getItem(themeStorageKey);

    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");

      themeToggle.setAttribute("aria-pressed", "true");

      themeToggle.setAttribute(
        "aria-label",
        "Switch to light mode"
      );
    }

    themeToggle.addEventListener("click", () => {
      const isDarkTheme =
        document.documentElement.getAttribute("data-theme") === "dark";

      if (isDarkTheme) {
        document.documentElement.removeAttribute("data-theme");

        localStorage.setItem(themeStorageKey, "light");

        themeToggle.setAttribute("aria-pressed", "false");

        themeToggle.setAttribute(
          "aria-label",
          "Switch to dark mode"
        );
      } else {
        document.documentElement.setAttribute("data-theme", "dark");

        localStorage.setItem(themeStorageKey, "dark");

        themeToggle.setAttribute("aria-pressed", "true");

        themeToggle.setAttribute(
          "aria-label",
          "Switch to light mode"
        );
      }
    });
  }


  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".site-navigation");

  if (menuToggle && siteNavigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNavigation.classList.toggle("is-open");

      menuToggle.classList.toggle("is-active", isOpen);

      document.body.classList.toggle("menu-open", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );
    });


    // Close mobile navigation after selecting link
    const navigationLinks = document.querySelectorAll(
      ".site-navigation__link"
    );

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNavigation.classList.remove("is-open");

        menuToggle.classList.remove("is-active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );
      });
    });


    // Close mobile navigation with Escape key
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        siteNavigation.classList.contains("is-open")
      ) {
        siteNavigation.classList.remove("is-open");

        menuToggle.classList.remove("is-active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        menuToggle.focus();
      }
    });
  }


  // Newsletter form
  const newsletterForm = document.querySelector(
    "#newsletter-form"
  );

  const newsletterEmail = document.querySelector(
    "#newsletter-email"
  );

  const newsletterMessage = document.querySelector(
    "#newsletter-message"
  );

  if (
    newsletterForm &&
    newsletterEmail &&
    newsletterMessage
  ) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailValue = newsletterEmail.value.trim();

      newsletterMessage.classList.remove(
        "is-error",
        "is-success"
      );

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
  }

  // Search functionality
  const searchForm = document.querySelector("#search-form");
  const searchInput = document.querySelector("#search-input");
  const searchClear = document.querySelector("#search-clear");
  const searchResultsList = document.querySelector(
    "#search-results-list"
  );
  const searchResultsCount = document.querySelector(
    "#search-results-count"
  );
  const searchEmptyState = document.querySelector(
    "#search-empty-state"
  );

  if (
    searchForm &&
    searchInput &&
    searchClear &&
    searchResultsList &&
    searchResultsCount &&
    searchEmptyState
  ) {
    const searchResults = Array.from(
      searchResultsList.querySelectorAll(".search-result")
    );

    const updateSearchResults = () => {
      const searchQuery = searchInput.value
        .trim()
        .toLowerCase();

        searchClear.hidden = searchQuery === "";

      let visibleResults = 0;

      searchResults.forEach((result) => {
        const searchTitle =
          result.dataset.searchTitle.toLowerCase();

        const searchCategory =
          result.dataset.searchCategory.toLowerCase();

        const searchDescription =
          result.dataset.searchDescription.toLowerCase();

        const searchableContent = [
          searchTitle,
          searchCategory,
          searchDescription
        ].join(" ");

        const matchesSearch =
          searchQuery === "" ||
          searchableContent.includes(searchQuery);

        result.hidden = !matchesSearch;

        if (matchesSearch) {
          visibleResults += 1;
        }
      });

      if (searchQuery === "") {
        searchResultsCount.textContent =
          "Browse our latest articles and stories.";

        searchResultsList.hidden = false;
        searchEmptyState.hidden = true;

        return;
      }

      if (visibleResults === 1) {
        searchResultsCount.textContent =
          '1 story found for "' +
          searchInput.value.trim() +
          '".';
      } else {
        searchResultsCount.textContent =
          visibleResults +
          ' stories found for "' +
          searchInput.value.trim() +
          '".';
      }

      if (visibleResults === 0) {
        searchResultsList.hidden = true;
        searchEmptyState.hidden = false;
      } else {
        searchResultsList.hidden = false;
        searchEmptyState.hidden = true;
      }
    };

    searchInput.addEventListener(
      "input",
      updateSearchResults
    );

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      updateSearchResults();
    });

    searchClear.addEventListener("click", () => {
      searchInput.value = "";

      updateSearchResults();

      searchInput.focus();
    });
  }
});