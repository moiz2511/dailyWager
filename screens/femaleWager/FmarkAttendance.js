import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import Colors from "../../constants/Colors";
import New from "../../New";

import * as SQLite from "expo-sqlite";
import InputField from "../../components/InputField";

const db = SQLite.openDatabase("testWage11.db");

const FmarkAttendance = (props) => {
  //const [mydate, setDate1] = useState(0);
  //const [mymonth, setMonth1] = useState(0);
  //const [myyear, setYear1] = useState(0);
  var [nowDate, setNowDate] = useState("0,0,0");
  const [dataExtracted1, setDataExtracted1] = useState([]);
  const [dataExtracted11, setDataExtracted11] = useState([]);

  const [buttonText, setButtonText] = useState("Save");

  var dataLoaded = 0;

  const selectedDate = (cdate) => {
    console.log("check");
    console.log(cdate);
    setNowDate(cdate);
  };
  const loadData = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM FemaleWagers",
          [],
          (tx, results) => {
            console.log(results);
            dataLoaded = results;
            var dataExtracted = dataLoaded.rows._array;
            console.log("outside");
            console.log(dataExtracted);
            setDataExtracted11(dataExtracted);
            console.log("cheecking");
            console.log(dataExtracted11);
            for (x of dataExtracted) {
              var another = x.Name;
              console.log("x");
              console.log(x);
              console.log(another);
              setDataExtracted1((currentState) => [...currentState, another]);
            }

            console.log(dataExtracted);
            resolve("nice");
          },
          (tx, err) => {
            reject(err);
          }
        );
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
  //loadData();

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
      <View style={{ width: "30%", alignSelf: "center" }}>
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
      <View style={{ backgroundColor: "#ccc", margin: 10, flex: 1 }}>
        <ScrollView>
          {dataExtracted11.map((data) => (
            <InputField data1={data} key={data.ID} passedDate={nowDate} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

FmarkAttendance.navigationOptions = {
  headerTitle: "Female Labour Attendance",
};

export default FmarkAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});
