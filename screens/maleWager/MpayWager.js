import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MpayWager = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is pay Wager Page</Text>
    </View>
  );
};

MpayWager.navigationOptions = {
  headerTitle: "Pay Male Labour",
};

export default MpayWager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
