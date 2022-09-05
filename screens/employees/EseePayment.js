import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EseePayment = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is See Payment Page</Text>
    </View>
  );
};

EseePayment.navigationOptions = {
  headerTitle: "Employee Old Payments",
};

export default EseePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
