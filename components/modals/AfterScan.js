import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import BgButton from "../interaction/BgButton";

export default AfterScan = (props) => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white", padding: 30, opacity: 1 }}>
          <Text>Scan another product?</Text>
          <View style={styles.space2}>
            <BgButton text="YES" onClick={props.onContinueScan} />
            <View style={styles.space} />
            <BgButton text="NO" onClick={props.onCancelScan} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  space: {
    width:20,
    height:20
  },

  space2: {
    flexDirection: "row",
    
    height:50,
  }

});
