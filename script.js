const newsArr = [
  {
    newsDate: "14 июля 2024г.",
    newsTitle:
      "Ведутся технические работы по добавлению на сайт материалов и информации.",
  },
  {
    newsDate: "15 июля 2024г.",
    newsTitle: "Ведутся работы по добавлению книг",
  },
  {
    newsDate: "23 июля 2024г.",
    newsTitle:
      "Сегодня исполнилось бы 83 года... Вечная память и Царствия Небесного!",
  },
];

const newsBlock = document.querySelector(".main_news");
window.addEventListener("DOMContentLoaded", function () {
  newsAdd(newsArr);
});

function newsAdd(arr) {
  let displayNews = `<h2>Новости портала</h2>` + arr.map(function (item) {
    return `<div class="main_news__block">
      <div>${item.newsDate}</div>
      <div>${item.newsTitle}</div>
    </div>`;
  }).join('');
  newsBlock.innerHTML = displayNews;
}
