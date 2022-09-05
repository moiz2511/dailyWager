import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import PayDetailsName from "../../PayDetailsName";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("testWage11.db");

const FseePayment = (props) => {
  const [dates, setDates] = useState([]);
  const [uniDates, setUniDates] = useState([]);

  const loadData = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM paidData", [], (tx, results) => {
        var test = results.rows._array;
        for (x of test) {
          setDates((current) => [...current, x.PayDate]);
        }
      });
    });
    getUnique();
  };
  const getUnique = () => {
    var temp = [];
    for (var value of dates) {
      if (temp.indexOf(value) === -1) {
        temp.push(value);
      }
    }
    setUniDates(temp);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{uniDates}</Text>
      <Button
        title="click"
        onPress={() => {
          getUnique;
        }}
      />
    </View>
  );
};

FseePayment.navigationOptions = {
  headerTitle: "Female Labour Old Payments",
};

export default FseePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
