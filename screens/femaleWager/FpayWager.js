import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Colors from "../../constants/Colors";
import New from "../../New";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("testWage11.db");

const FpayWager = (props) => {
  var dataTested = 0;
  var [nowDate, setNowDate] = useState("0,0,0");
  const [dataExtracted11, setDataExtracted11] = useState([]);
  const [display, setDisplay] = useState([]);
  var replacing = [];

  const loadData = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM FemaleAttendance",
          [],
          (tx, results) => {
            console.log("showing results");
            console.log(results);

            var dataTested = results;
            var getData = dataTested.rows._array;
            replacing = getData;
            console.log("replace");
            console.log(replacing);
            setDataExtracted11(getData);
            console.log("dataExtracted");
            console.log(dataExtracted11);
            console.log(getData);
            resolve("nice");
          },
          (tx, err) => {
            reject(err);
          }
        );
        tx.executeSql("SELECT * FROM FemaleWagers", [], (tx, results) => {
          setDisplay(results.rows._array);
        });
      });
    });
    promise
      .then((message) => {
        console.log("success");
      })
      .catch((message) => {
        console.log("rejected");
      });
  };
  useEffect(loadData, []);

  const selectedDate = (cdate) => {
    console.log("check");
    console.log(cdate);
    setNowDate(cdate);
  };
  const ShowCurrentDate = () => {
    var date = new Date().getDate();

    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    if (date < 10) {
      date = "0".concat(date);
    }
    if (month < 10) {
      month = "0".concat(month);
    }
    var Date1 = date + "," + month + "," + year;
    setNowDate(Date1);
  };
  useEffect(ShowCurrentDate, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            width: "30%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.dateStyle}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                {nowDate}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 30,

            overflow: "hidden",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <New
            styles={{ flex: 1, width: 150, height: 100 }}
            getChDate={selectedDate}
          />
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        {display.map((data) => (
          <View key={data.ID}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate({
                  routeName: "PayDetails",
                  params: {
                    EmployeeId: data.ID,
                    EmployeeName: data.Name,
                    dataSent: dataExtracted11,
                    Wage: data.Wage,
                    paidDate: nowDate,
                  },
                })
              }
            >
              <View style={styles.emp}>
                <Text>{data.Name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

FpayWager.navigationOptions = {
  headerTitle: "Pay Female Labour",
};

export default FpayWager;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  dateStyle: {
    alignItems: "center",
    backgroundColor: Colors.accentColor,
    width: "100%",
    alignSelf: "center",
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    paddingTop: 3,
    overflow: "hidden",
  },
  emp: {
    padding: 10,
    backgroundColor: "#ccc",
    margin: 10,
    borderRadius: 20,
  },
});
