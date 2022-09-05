import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EpayWager = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is pay Wager Page</Text>
    </View>
  );
};

EpayWager.navigationOptions = {
  headerTitle: "Pay Employee",
};

export default EpayWager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
