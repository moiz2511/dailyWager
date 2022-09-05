import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MseePayment = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is See Payment Page</Text>
    </View>
  );
};

MseePayment.navigationOptions = {
  headerTitle: "Male Labour Old Payments",
};

export default MseePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
