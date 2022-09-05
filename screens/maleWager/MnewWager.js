import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MnewWager = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is New Wager Page</Text>
    </View>
  );
};

MnewWager.navigationOptions = {
  headerTitle: "Add New Male Labour",
};

export default MnewWager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
