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

  if (period === "day") {
    filteredArticles = boughtArticles.filter((article) => article.timeStamp.getDate() === date);
  }
  if (period === "month") {
    filteredArticles = boughtArticles.filter((article) => article.timeStamp.getMonth() + 1 === month);
  }
  if (period === "year") {
    filteredArticles = boughtArticles.filter((article) => article.timeStamp.getFullYear() === year);
  }
  if (period === "total") {
    filteredArticles = boughtArticles;
  }
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
          backgroundColor: "#158915",
          backgroundGradientFrom: "#A8A8A8",
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
    margin: 8,
    borderRadius: 16,
  },
});
