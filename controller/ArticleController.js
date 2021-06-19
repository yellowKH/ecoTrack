import BoughtItem from "../models/boughtItem";
import FavorizedItem from "../models/favorizedItem";

function deleteArticle(listedArticles, toDeleteArticle, toDeleteArticleIndex, newScores) {
  newScores = newScores - toDeleteArticle.score * listedArticles[toDeleteArticleIndex].quantity;

  let totalItems = 0;
  for (let i = 0; i < listedArticles.length; i++) {
    totalItems = totalItems + listedArticles[i]["quantity"];
  }

  const newAverage = totalItems === 0 ? 0 : (newScores / totalItems).toFixed(2);

  listedArticles.splice(toDeleteArticleIndex, 1);

  return [newScores, newAverage, listedArticles];
}

function updateBoughtArticles(scannedArticle, quantity, newScores, totalQuantity, foundArticle, newBoughtArticles) {
  if (foundArticle) {
    const toUpdateArticle = newBoughtArticles.indexOf(foundArticle);
    newBoughtArticles.splice(toUpdateArticle, 1);
    totalQuantity = quantity + foundArticle.quantity;
  }
  newBoughtArticles.push(
    new BoughtItem(scannedArticle.id, scannedArticle.title, scannedArticle.description, scannedArticle.imgSrc, scannedArticle.score, totalQuantity, new Date())
  );

  newScores = newScores + scannedArticle.score * quantity;

  let totalItems = 0;
  for (let i = 0; i < newBoughtArticles.length; i++) {
    totalItems = totalItems + newBoughtArticles[i].quantity;
  }

  const newAverage = totalItems === 0 ? 0 : (newScores / totalItems).toFixed(2);

  return [newScores, newAverage, newBoughtArticles];
}

function updateFavArticles(foundFav, newFavArticles, id, title, description, imgSrc, score) {
  let listedArticles;

  if (!foundFav) {
    newFavArticles.push(new FavorizedItem(id, title, description, imgSrc, score, new Date()));
    listedArticles = newFavArticles;
  } else {
    listedArticles = newFavArticles;
    const toDeleteArticle = listedArticles.find((item) => item.id === id);
    let toDeleteArticleIndex = listedArticles.indexOf(toDeleteArticle);
    listedArticles.splice(toDeleteArticleIndex, 1);
  }

  return listedArticles;
}

export { deleteArticle, updateBoughtArticles, updateFavArticles };
