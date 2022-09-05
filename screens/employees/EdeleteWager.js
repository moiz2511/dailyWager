import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EdeleteWager = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Delete Wager Page</Text>
    </View>
  );
};

EdeleteWager.navigationOptions = {
  headerTitle: "Delete Employee",
};

export default EdeleteWager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
