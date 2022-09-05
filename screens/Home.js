import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ViewAllTable from "../ViewAllTable";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("testWage1.db");

const Home = (props) => {
  var te = 2;
  const exe = () => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM FemaleAttendance WHERE Emp_ID=?", [te]);
    });
  };
  return (
    <View style={styles.container}>
      <Text>This is first Home</Text>
      <Button title="click me" onPress={exe} />
    </View>
  );
};
Home.navigationOptions = {
  headerTitle: "Daily Wager",
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
