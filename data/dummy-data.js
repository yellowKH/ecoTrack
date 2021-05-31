import ArticleItem from "../models/articleItem";
import BoughtItem from "../models/boughtItem";
import FavorizedItem from "../models/favorizedItem";

export const ARTICLEITEMS = [
  new ArticleItem("m1", "Finish Project Maven", true),
  new ArticleItem("m2", "Call Ellie", false),
  new ArticleItem("m3", "Take 15 min break", false),
  new ArticleItem("m4", "Research React Native", true),
  new ArticleItem("m5", "Finish homework assignment 1", false),
  new ArticleItem("m6", "Get new Student ID Card", false),
  new ArticleItem("m7", "Buy Tomatoes", false),
  new ArticleItem("m8", "Buy Beer", true),
  new ArticleItem("m9", "Buy Milk", true),
  new ArticleItem("m10", "Finish painting the boat", false),
  new ArticleItem("m11", "Call mom", false),
  new ArticleItem("m12", "Give back money to sis", false),
  new ArticleItem("m13", "Raspberry Pi", false),
  new ArticleItem("m14", "Socks", false),
  new ArticleItem("m15", "Cookbook", true),
  new ArticleItem("m16", "Yoga mat", true),
  new ArticleItem("m17", "Fix the AC", false),
  new ArticleItem("m18", "Bring Sunglasses", false),
  new ArticleItem("m19", "Write a new song", false),
  new ArticleItem("m20", "Learn React Native", true),
];

export const BOUGHTITEMS = [new BoughtItem("m1", "Tomaten", "https://i.dlpng.com/static/png/6573334_preview.png", 40, "5", "31-05-2021")];

export const FAVORIZEDITEMS = [];
