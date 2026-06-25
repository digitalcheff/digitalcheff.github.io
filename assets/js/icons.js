export const ICONS = {
  digitalcheff: "/assets/icons/digitalcheff-64.png",
  axis6: "/assets/icons/axis6-128.png",
  pomovane: "/assets/icons/pomovane.svg",
  glitchwatch: "/assets/icons/glitchwatch-128.png",
  aiwaitindex: "/assets/icons/aiwaitindex.svg",
}

export function renderProductIcon(item) {
  if (item.iconSrc) {
    return `<img class="product-card__icon-img" src="${item.iconSrc}" alt="" width="48" height="48" loading="lazy" decoding="async">`
  }
  return item.icon
}

export function productIconClass(item) {
  return item.iconSrc ? "product-card__icon product-card__icon--image" : "product-card__icon"
}

export function productIconStyle(item) {
  return item.iconSrc ? "" : ` style="background:${item.iconBg}"`
}
