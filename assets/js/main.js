import { APPS, GAMES } from "./products.js"
import { COPY, CONTACT_EMAIL, getLang, setLang, t } from "./i18n.js"

const EMAIL_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`

let currentLang = getLang()

function badgeClass(status) {
  if (status === "live") return "badge--live"
  if (status === "dev") return "badge--dev"
  return "badge--soon"
}

function renderProductCard(item, lang) {
  const copy = t(lang, "status")
  const statusLabel = copy[item.status] ?? copy.soon
  const tagline = item.tagline[lang] ?? item.tagline.en
  const category = item.category[lang] ?? item.category.en
  const noLinksLabel = t(lang, "card.noLinks")

  const links = item.links.length
    ? item.links
        .map((link) => {
          const label = link.label[lang] ?? link.label.en
          return `<a class="product-card__link${link.primary ? " product-card__link--primary" : ""}" href="${link.href}"${link.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`
        })
        .join("")
    : `<span class="product-card__link product-card__link--muted">${noLinksLabel}</span>`

  return `
    <article class="product-card reveal">
      <div class="product-card__top">
        <div class="product-card__icon" style="background:${item.iconBg}">${item.icon}</div>
        <span class="product-card__badge ${badgeClass(item.status)}">${statusLabel}</span>
      </div>
      <h3 class="product-card__name">${item.name}</h3>
      <p class="product-card__tagline">${tagline}</p>
      <div class="product-card__meta">
        <span class="product-card__tag">${category}</span>
        ${item.tags.map((tag) => `<span class="product-card__tag">${tag}</span>`).join("")}
      </div>
      <div class="product-card__links">${links}</div>
    </article>
  `
}

function applyStaticCopy(lang) {
  const copy = COPY[lang]
  document.title = copy.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description)
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.meta.ogDescription)

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n
    const value = t(lang, key)
    if (value != null) el.textContent = value
  })

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml
    const value = t(lang, key)
    if (value != null) el.innerHTML = value
  })

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria
    const value = t(lang, key)
    if (value != null) el.setAttribute("aria-label", value)
  })

  const valuesList = document.getElementById("about-values")
  if (valuesList) {
    valuesList.innerHTML = copy.about.values
      .map(
        (item) => `
        <li>
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </li>`
      )
      .join("")
  }

  const langBtn = document.getElementById("lang-toggle")
  const mobileLangBtn = document.getElementById("lang-toggle-mobile")
  if (langBtn) {
    langBtn.textContent = copy.lang.switchTo
    langBtn.setAttribute("aria-label", copy.lang.switchTo)
  }
  if (mobileLangBtn) {
    mobileLangBtn.textContent = copy.lang.current
    mobileLangBtn.setAttribute("aria-label", copy.lang.switchTo)
  }
}

function renderProducts(lang) {
  document.getElementById("apps-grid").innerHTML = APPS.map((item) => renderProductCard(item, lang)).join("")
  document.getElementById("games-grid").innerHTML = GAMES.map((item) => renderProductCard(item, lang)).join("")

  const emailLabel = t(lang, "social.email")
  document.getElementById("social-grid").innerHTML = `
    <a class="social-link" href="mailto:${CONTACT_EMAIL}">
      ${EMAIL_ICON}
      ${emailLabel}
    </a>
  `
}

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    )
    observer.observe(el)
  })
}

function initReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReduced || !window.IntersectionObserver) return

  document.documentElement.classList.add("js-reveal")
  observeReveals()
}

function initHeader() {
  const header = document.querySelector(".site-header")
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
}

function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle")
  const nav = document.getElementById("mobile-nav")
  if (!toggle || !nav) return

  const close = () => {
    toggle.setAttribute("aria-expanded", "false")
    nav.hidden = true
  }

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true"
    toggle.setAttribute("aria-expanded", String(open))
    nav.hidden = !open
  })

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close))
}

function initLangToggle() {
  const btn = document.getElementById("lang-toggle")
  const mobileBtn = document.getElementById("lang-toggle-mobile")
  const switchLang = () => {
    const next = currentLang === "en" ? "tr" : "en"
    currentLang = next
    setLang(next)
    applyStaticCopy(next)
    renderProducts(next)
    requestAnimationFrame(observeReveals)
  }
  btn?.addEventListener("click", switchLang)
  mobileBtn?.addEventListener("click", switchLang)
}

function initYear() {
  const year = document.getElementById("year")
  if (year) year.textContent = String(new Date().getFullYear())
}

function init() {
  setLang(currentLang)
  applyStaticCopy(currentLang)
  renderProducts(currentLang)
  initReveal()
  initHeader()
  initMobileNav()
  initLangToggle()
  initYear()
}

init()
