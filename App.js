import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import ArticleList from "./screens/ArticleList";
import ArticleInfo from "./screens/ArticleInfo";
import Scan from "./screens/Scan";
import FavoriteList from "./screens/FavoriteList";
import FavoriteArticleInfo from "./screens/FavoriteArticleInfo";
import ScannedArticleInfo from "./screens/ScannedArticleInfo";

function HomeScreen() {
    return <Home />;
}

function ArticleListScreen() {
    return <ArticleList />;
}

function ArticleInfoScreen() {
    return <ArticleInfo />;
}

function ScanScreen() {
    return <Scan />;
}

function ScannedArticleInfoScreen() {
    return <ScannedArticleInfo />;
}

function FavoriteListScreen() {
    return <FavoriteList />;
}

function FavoriteArticleInfoScreen() {
    return <FavoriteArticleInfo />;
}

const HomeStack = createStackNavigator();
const ScanStack = createStackNavigator();
const FavoriteStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Bought articles" component={ArticleListScreen} />
            <HomeStack.Screen name="Article" component={ArticleInfoScreen} />
        </HomeStack.Navigator>
    );
}

function ScanStackScreen() {
    return (
        <ScanStack.Navigator>
            <ScanStack.Screen name="Scanner" component={ScanScreen} />
            <ScanStack.Screen name="Scanned Article" component={ScannedArticleInfoScreen} />
        </ScanStack.Navigator>
    );
}

function FavoriteStackScreen() {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="Favorites" component={FavoriteListScreen} />
            <FavoriteStack.Screen name="Favorite Article" component={FavoriteArticleInfoScreen} />
        </FavoriteStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Scan" component={ScanStackScreen} />
            <Tab.Screen name="Favorites" component={FavoriteStackScreen} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

export default App;
