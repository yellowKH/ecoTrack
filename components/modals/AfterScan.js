import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import BgButton from "../interaction/BgButton";

export default AfterScan = (props) => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text>Scan another product?</Text>
          <View style={styles.buttonWrapper}>
            <BgButton text="NO" onClick={props.onCancelScan} />
            <BgButton text="YES" onClick={props.onContinueScan} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    opacity: 1,
    width: "70%",
  },

  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "100%",
  },
});
