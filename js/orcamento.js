const search = new URLSearchParams(location.search);

search.forEach((e) => {
  const elemento = document.getElementById(e);
  if (elemento) {
    elemento.checked = true;
  }
});
