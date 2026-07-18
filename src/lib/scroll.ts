/**
 * Smoothly scrolls the viewport to a section by its DOM id.
 * Plays nicely with the Lenis smooth-scroll wrapper, which intercepts
 * the native scroll and eases it for us.
 */
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
