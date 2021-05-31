import ArticleItem from "../models/articleItem";
import BoughtItem from "../models/boughtItem";
import FavorizedItem from "../models/favorizedItem";

export const ARTICLEITEMS = [
  new ArticleItem(
    "123456",
    "Coca Cola 1,5L",
    "Also perfectly usable as bleach",
    "https://toppng.com/uploads/preview/coca-cola-bottle-11528338683o0snrfbxt5.png",
    2
  ),
];

export const BOUGHTITEMS = [
  new BoughtItem(
    "m1",
    "Tomaten",
    "Super delicious tomatos",
    "https://www.kochschule.de/sites/default/files/images/kochwissen/461/tomate.jpg",
    7.5,
    "3",
    "31-05-2021"
  ),
];

export const FAVORIZEDITEMS = [];
