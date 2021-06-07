import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default Chart = (props) => {
  const boughtArticles = props.boughtArticles;
  const scores = [];
  const labels = [];
  for (let i = 0; i < boughtArticles.length; i++) {
    scores.push(boughtArticles[i].score);
    labels.push(boughtArticles[i].quantity);
  }

  if (!scores.length) {
    dataset = [0, 0, 0, 0, 0, 0];
  } else {
    dataset = scores;
  }

  return (
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
  );
};

const styles = StyleSheet.create({
  chart: {
    margin: 8,
    borderRadius: 16,
  },
});
