import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EnewEmployee = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is New Employee Page</Text>
    </View>
  );
};

EnewEmployee.navigationOptions = {
  headerTitle: "Add New Employee",
};

export default EnewEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
