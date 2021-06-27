import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
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
import { BOUGHTITEMS, ARTICLEITEMS, CO2SCORES, AVERAGESCORE, FAVORIZEDITEMS } from "./data/dummy-data";
import { getData } from "./data/AppStorage";
import Icon from "react-native-vector-icons/AntDesign";

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
      <TrackerStack.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          headerShown: false,
        }}
      />
      <TrackerStack.Screen
        name="Article Info"
        component={ArticleInfoScreen}
        options={{
          headerStyle: {
            backgroundColor: "#7fffd4",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
            marginRight: "20%",
          },
          title: "Bought Article",
        }}
      />
    </TrackerStack.Navigator>
  );
}

function ScannerStackScreen() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          headerShown: false,
        }}
      />
      <ScannerStack.Screen
        name="Scanned Article"
        component={ScannedArticleScreen}
        options={{
          headerStyle: {
            backgroundColor: "#7fffd4",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
            marginRight: "20%",
          },
          title: "Scanned Article",
        }}
      />
    </ScannerStack.Navigator>
  );
}

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="Favorites"
        component={FavListScreen}
        options={{
          headerShown: false,
        }}
      />
      <FavoritesStack.Screen
        name="Fav Article Info"
        component={FavArticleInfoScreen}
        options={{
          headerStyle: {
            backgroundColor: "#7fffd4",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
            marginRight: "20%",
          },
          title: "Favorized Article",
        }}
      />
    </FavoritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ style: { backgroundColor: "#7fffd4" } }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name="Tracker" component={TrackerStackScreen} />
      <Tab.Screen name="Scanner" component={ScannerStackScreen} />
      <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
    </Tab.Navigator>
  );
}

//Icons
const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "Tracker":
      iconName = "dotchart";
      break;
    case "Scanner":
      iconName = "scan1";
      break;
    case "Favorites":
      iconName = "staro";
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
};

export default (App) => {
  const [articleData, setArticleData] = useState({
    articles: ARTICLEITEMS,
    boughtArticles: BOUGHTITEMS,
    scores: CO2SCORES,
    average: AVERAGESCORE,
    favArticles: FAVORIZEDITEMS,
  });

  useEffect(() => {
    getData()
      .then((returnedValue) => {
        setArticleData(JSON.parse(returnedValue));
      })
      .catch(() => console.log("No Data found!"));
  }, []);

  return (
    <ArticleContext.Provider value={[articleData, setArticleData]}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ArticleContext.Provider>
  );
};
