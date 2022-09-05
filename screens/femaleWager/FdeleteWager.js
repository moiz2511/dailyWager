import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FdeleteWager = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Delete Wager Page</Text>
    </View>
  );
};

FdeleteWager.navigationOptions = {
  headerTitle: "Delete Female Labour",
};

export default FdeleteWager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
