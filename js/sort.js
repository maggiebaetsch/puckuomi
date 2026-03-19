function sortArticles() {
  let list = document.getElementById("articleList");
  let items = Array.from(list.getElementsByTagName("li"));

  let mode = document.getElementById("sortSelect").value;

  if (mode === "az") {
    items.sort(function (a, b) {
      return a.textContent.localeCompare(b.textContent);
    });
  }

  if (mode === "date") {
    items.sort(function (a, b) {
      return new Date(b.dataset.date) - new Date(a.dataset.date);
    });
  }

  list.innerHTML = "";
  items.forEach((item) => list.appendChild(item));
}
