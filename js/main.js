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
  }

  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".site-navigation");

  if (menuToggle && siteNavigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNavigation.classList.toggle("is-open");

      menuToggle.classList.toggle("is-active", isOpen);

      document.body.classList.toggle("menu-open", isOpen);

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
    });

    // Close mobile navigation after selecting link
    const navigationLinks = document.querySelectorAll(".site-navigation__link");

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNavigation.classList.remove("is-open");

        menuToggle.classList.remove("is-active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");
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

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.focus();
      }
    });
  }

  // Newsletter form
  const newsletterForm = document.querySelector("#newsletter-form");

  const newsletterEmail = document.querySelector("#newsletter-email");

  const newsletterMessage = document.querySelector("#newsletter-message");

  if (newsletterForm && newsletterEmail && newsletterMessage) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailValue = newsletterEmail.value.trim();

      newsletterMessage.classList.remove("is-error", "is-success");

      if (!emailValue) {
        newsletterMessage.textContent = "Please enter your email address.";

        newsletterMessage.classList.add("is-error");

        newsletterEmail.focus();

        return;
      }

      if (!newsletterEmail.validity.valid) {
        newsletterMessage.textContent = "Please enter a valid email address.";

        newsletterMessage.classList.add("is-error");

        newsletterEmail.focus();

        return;
      }

      newsletterMessage.textContent = "Thanks for subscribing to Open Gazette.";

      newsletterMessage.classList.add("is-success");

      newsletterForm.reset();
    });
  }

  // Search functionality
  const searchForm = document.querySelector("#search-form");
  const searchInput = document.querySelector("#search-input");
  const searchClear = document.querySelector("#search-clear");
  const searchResultsList = document.querySelector("#search-results-list");
  const searchResultsCount = document.querySelector("#search-results-count");
  const searchEmptyState = document.querySelector("#search-empty-state");

  if (
    searchForm &&
    searchInput &&
    searchClear &&
    searchResultsList &&
    searchResultsCount &&
    searchEmptyState
  ) {
    const searchResults = Array.from(
      searchResultsList.querySelectorAll(".search-result"),
    );

    const updateSearchResults = () => {
      const searchQuery = searchInput.value.trim().toLowerCase();

      searchClear.hidden = searchQuery === "";

      let visibleResults = 0;

      searchResults.forEach((result) => {
        const searchTitle = result.dataset.searchTitle.toLowerCase();

        const searchCategory = result.dataset.searchCategory.toLowerCase();

        const searchDescription =
          result.dataset.searchDescription.toLowerCase();

        const searchableContent = [
          searchTitle,
          searchCategory,
          searchDescription,
        ].join(" ");

        const matchesSearch =
          searchQuery === "" || searchableContent.includes(searchQuery);

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
          '1 story found for "' + searchInput.value.trim() + '".';
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

    searchInput.addEventListener("input", updateSearchResults);

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

  // Latest page rendering
  const latestFeaturedArticle = document.querySelector(
    "#latest-featured-article",
  );
  const latestStoriesGrid = document.querySelector("#latest-stories-grid");

  if (
    latestFeaturedArticle &&
    latestStoriesGrid &&
    typeof articles !== "undefined"
  ) {
    const featuredArticle = articles.find((article) => article.featured);
    const latestArticles = articles.filter(
      (article) => article.latest && !article.featured
    );

    if (featuredArticle) {
      latestFeaturedArticle.innerHTML = `
            <a
                class="latest-featured__image-link"
                href="article.html"
                aria-label="Read ${featuredArticle.title}"
            >
                <img
                    class="latest-featured__image"
                    src="${featuredArticle.image.src}"
                    alt="${featuredArticle.image.alt}"
                >
            </a>

            <div class="latest-featured__content">
                <a
                    class="article-category"
                    href="category.html"
                >
                    ${featuredArticle.category.name}
                </a>

                <h2 class="latest-featured__title">
                    <a href="article.html">
                        ${featuredArticle.title}
                    </a>
                </h2>

                <p class="latest-featured__excerpt">
                    ${featuredArticle.excerpt}
                </p>

                <div class="article-meta">
                    <span>
                        ${featuredArticle.author.name}
                    </span>

                    <span class="article-meta__separator">
                        ·
                    </span>

                    <time datetime="${featuredArticle.publishedAt}">
                        ${new Date(
                          featuredArticle.publishedAt,
                        ).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                    </time>

                    <span class="article-meta__separator">
                        ·
                    </span>

                    <span>
                        ${featuredArticle.readingTime} min read
                    </span>
                </div>
            </div>
        `;
    }

    latestStoriesGrid.innerHTML = latestArticles
      .map((article) => {
        const publishedDate = new Date(article.publishedAt).toLocaleDateString(
          "en-US",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          },
        );

        return `
                <article class="article-card">
                    <a
                        class="article-card__image-link"
                        href="article.html"
                        aria-label="Read ${article.title}"
                    >
                        <img
                            class="article-card__image"
                            src="${article.image.src}"
                            alt="${article.image.alt}"
                        >
                    </a>

                    <div class="article-card__content">
                        <a
                            class="article-category"
                            href="category.html"
                        >
                            ${article.category.name}
                        </a>

                        <h3 class="article-card__title">
                            <a href="article.html">
                                ${article.title}
                            </a>
                        </h3>

                        <p class="article-card__excerpt">
                            ${article.excerpt}
                        </p>

                        <div class="article-meta">
                            <time datetime="${article.publishedAt}">
                                ${publishedDate}
                            </time>

                            <span class="article-meta__separator">
                                ·
                            </span>

                            <span>
                                ${article.readingTime} min read
                            </span>
                        </div>
                    </div>
                </article>
            `;
      })
      .join("");
  }

  // Trending page rendering

  const trendingFeaturedArticle = document.querySelector(
    "#trending-featured-article"
  );

  const trendingList = document.querySelector("#trending-list");

  const trendingMoreGrid = document.querySelector("#trending-more-grid");

  if (
    trendingFeaturedArticle &&
    trendingList &&
    trendingMoreGrid &&
    typeof articles !== "undefined"
  ) {
    const trendingArticles = articles.filter(
      (article) => article.trending
    );

    const featuredTrendingArticle = trendingArticles[0];

    const rankedTrendingArticles = trendingArticles.slice(1, 5);

    const moreTrendingArticles = trendingArticles.slice(5);

    // Render featured trending article

    if (featuredTrendingArticle) {
      const publishedDate = new Date(
        featuredTrendingArticle.publishedAt
      ).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      trendingFeaturedArticle.innerHTML = `
      <div
        class="trending-rank trending-rank--featured"
        aria-label="Rank 1"
      >
        01
      </div>

      <a
        class="trending-featured__image-link"
        href="article.html?slug=${featuredTrendingArticle.slug}"
        aria-label="Read ${featuredTrendingArticle.title}"
      >
        <img
          class="trending-featured__image"
          src="${featuredTrendingArticle.image.src}"
          alt="${featuredTrendingArticle.image.alt}"
        />
      </a>

      <div class="trending-featured__content">
        <a
          class="article-category"
          href="category.html?category=${featuredTrendingArticle.category.slug}"
        >
          ${featuredTrendingArticle.category.name}
        </a>

        <h3 class="trending-featured__title">
          <a href="article.html?slug=${featuredTrendingArticle.slug}">
            ${featuredTrendingArticle.title}
          </a>
        </h3>

        <p class="trending-featured__excerpt">
          ${featuredTrendingArticle.excerpt}
        </p>

        <div class="article-meta">
          <time datetime="${featuredTrendingArticle.publishedAt}">
            ${publishedDate}
          </time>

          <span class="article-meta__separator"> · </span>

          <span>
            ${featuredTrendingArticle.readingTime} min read
          </span>
        </div>
      </div>
    `;
    }

    // Render ranked trending articles

    trendingList.innerHTML = rankedTrendingArticles
      .map((article, index) => {
        const rank = String(index + 2).padStart(2, "0");

        const publishedDate = new Date(
          article.publishedAt
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        return `
        <article class="trending-list__item">
          <div
            class="trending-rank"
            aria-label="Rank ${rank}"
          >
            ${rank}
          </div>

          <a
            class="trending-list__image-link"
            href="article.html?slug=${article.slug}"
            aria-label="Read ${article.title}"
          >
            <img
              class="trending-list__image"
              src="${article.image.src}"
              alt="${article.image.alt}"
            />
          </a>

          <div class="trending-list__content">
            <a
              class="article-category"
              href="category.html?category=${article.category.slug}"
            >
              ${article.category.name}
            </a>

            <h3 class="trending-list__title">
              <a href="article.html?slug=${article.slug}">
                ${article.title}
              </a>
            </h3>

            <p class="trending-list__excerpt">
              ${article.excerpt}
            </p>

            <div class="article-meta">
              <time datetime="${article.publishedAt}">
                ${publishedDate}
              </time>

              <span class="article-meta__separator"> · </span>

              <span>
                ${article.readingTime} min read
              </span>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Render more trending articles

    trendingMoreGrid.innerHTML = moreTrendingArticles
      .map((article) => {
        const publishedDate = new Date(
          article.publishedAt
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        return `
        <article class="article-card">
          <a
            class="article-card__image-link"
            href="article.html?slug=${article.slug}"
            aria-label="Read ${article.title}"
          >
            <img
              class="article-card__image"
              src="${article.image.src}"
              alt="${article.image.alt}"
            />
          </a>

          <div class="article-card__content">
            <a
              class="article-category"
              href="category.html?category=${article.category.slug}"
            >
              ${article.category.name}
            </a>

            <h3 class="article-card__title">
              <a href="article.html?slug=${article.slug}">
                ${article.title}
              </a>
            </h3>

            <p class="article-card__excerpt">
              ${article.excerpt}
            </p>

            <div class="article-meta">
              <time datetime="${article.publishedAt}">
                ${publishedDate}
              </time>

              <span class="article-meta__separator"> · </span>

              <span>
                ${article.readingTime} min read
              </span>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }
});
