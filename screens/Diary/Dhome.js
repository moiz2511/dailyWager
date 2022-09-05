import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Dhome = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Diary Home</Text>
    </View>
  );
};
Dhome.navigationOptions = {
  headerTitle: "Diary",
};

export default Dhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
