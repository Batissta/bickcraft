const links = document.querySelectorAll(".header-menu a");

links.forEach((e) => {
  const href = e.href;
  const url = location.href;

  if (url.includes(href)) {
    e.classList.add("active");
  }
});
