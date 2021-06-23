import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default Chart = (props) => {
  const boughtArticles = props.boughtArticles;
  let filteredArticles = [];
  const period = props.period;
  const scores = [];
  const labels = [];
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const timeStampHandler = () => {
    if (period === "day") {
      return boughtArticles.filter(
        (article) =>
          new Date(article.timeStamp).getDate() === date &&
          new Date(article.timeStamp).getMonth() + 1 === month &&
          new Date(article.timeStamp).getFullYear() === year
      );
    }
    if (period === "month") {
      return boughtArticles.filter((article) => new Date(article.timeStamp).getMonth() + 1 === month && new Date(article.timeStamp).getFullYear() === year);
    }
    if (period === "year") {
      return boughtArticles.filter((article) => new Date(article.timeStamp).getFullYear() === year);
    }
    if (period === "total") {
      return boughtArticles;
    }
  };

  filteredArticles = timeStampHandler();

  for (let i = 0; i < filteredArticles.length; i++) {
    scores.push(filteredArticles[i].score);
    labels.push(filteredArticles[i].quantity);
  }

  if (!scores.length) {
    dataset = [0, 0, 0, 0, 0, 0];
  } else {
    dataset = scores;
  }

  return (
    <View>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataset,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //backgroundColor: "#158915",
          //backgroundGradientFrom: "#A8A8A8",
          backgroundColor: "#246EE9",
          backgroundGradientFrom: "#3083dc",
          backgroundGradientTo: "#DCDCDC",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#4c4cff",
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    marginTop: 40,
    margin: 8,
    borderRadius: 16,
  },
});
