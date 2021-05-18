import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default Chart = (props) => {
  return (
    <View style={{ flex: 1, width: "100%", height: 100, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.chart}
        source={{
          uri: "https://banner2.cleanpng.com/20180802/psz/kisspng-bar-chart-clip-art-portable-network-graphics-graph-business-growth-graph-hires-smartes-online-marke-5b62ba1c1eafd0.6475180015331968281257.jpg",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    width: "90%",
    height: "90%",
  },
});
