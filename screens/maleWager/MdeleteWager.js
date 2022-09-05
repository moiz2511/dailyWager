import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MdeleteWager = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Delete Wager Page</Text>
    </View>
  );
};

MdeleteWager.navigationOptions = {
  headerTitle: "Delete Male Labour",
};

export default MdeleteWager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
