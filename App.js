import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tracker from "./screens/Tracker";
import ArticleInfo from "./screens/ArticleInfo";
import Scanner from "./screens/Scanner";
import FavArticleList from "./screens/FavArticleList";
import FavArticleInfo from "./screens/FavArticleInfo";
import ScannedArticle from "./screens/ScannedArticle";
import { ArticleContext } from "./data/ArticleContext";
import { BOUGHTITEMS, ARTICLEITEMS, CO2SCORES, AVERAGESCORE } from "./data/dummy-data";

function TrackerScreen() {
  return <Tracker />;
}

function ArticleInfoScreen() {
  return <ArticleInfo />;
}

function ScannerScreen() {
  return <Scanner />;
}

function ScannedArticleScreen() {
  return <ScannedArticle />;
}

function FavListScreen() {
  return <FavArticleList />;
}

function FavArticleInfoScreen() {
  return <FavArticleInfo />;
}

const TrackerStack = createStackNavigator();
const ScannerStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

function TrackerStackScreen() {
  return (
    <TrackerStack.Navigator>
      <TrackerStack.Screen name="Tracker" component={TrackerScreen} />
      <TrackerStack.Screen name="Article Info" component={ArticleInfoScreen} />
    </TrackerStack.Navigator>
  );
}

function ScannerStackScreen() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen name="Scanner" component={ScannerScreen} />
      <ScannerStack.Screen name="Scanned Article" component={ScannedArticleScreen} />
    </ScannerStack.Navigator>
  );
}

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Fav Article List" component={FavListScreen} />
      <FavoritesStack.Screen name="Fav Article Info" component={FavArticleInfoScreen} />
    </FavoritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tracker" component={TrackerStackScreen} />
      <Tab.Screen name="Scanner" component={ScannerStackScreen} />
      <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
    </Tab.Navigator>
  );
}

export default (App) => {
  const [articleData, setArticleData] = useState({ articles: ARTICLEITEMS, boughtArticles: BOUGHTITEMS, scores: CO2SCORES, average: AVERAGESCORE });
  return (
    <ArticleContext.Provider value={[articleData, setArticleData]}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ArticleContext.Provider>
  );
};
