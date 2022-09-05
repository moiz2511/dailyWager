import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MmarkAttendance = (props) => {
  return (
    <View style={styles.container}>
      <Text>this is Male attendence page</Text>
    </View>
  );
};

MmarkAttendance.navigationOptions = {
  headerTitle: "Male Labour Attendance",
};

export default MmarkAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
