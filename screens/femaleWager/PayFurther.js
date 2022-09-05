//LOad Data Again Here
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("testWage11.db");
const PayFurther = (props) => {
  var thisEmpId = props.navigation.getParam("EmployeeId");
  var wageof = props.navigation.getParam("Wage");
  var thisName = props.navigation.getParam("EmployeeName");
  const [patment, setPayment] = useState(0);
  const [thisTran, setThisTrans] = useState([]);
  const [final, setFinal] = useState([]);
  const [totalatt, setTotalAtte] = useState(0);
  const getTDate = props.navigation.getParam("paidDate");
  const [paidId, setPaidId] = useState(0);
  const createTable = () => {
    var s = JSON.stringify(getTDate);
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE  IF NOT EXISTS " +
          "paidData" +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT,Emp_ID INTEGER,TotalAtten INTEGER,TotalPaid Integer,PayDate TEXT,EmpName TEXT)"
      );
    });
  };

  useEffect(() => {
    createTable();
  }, []);
  //createTable();

  const DataReceived = props.navigation.getParam("dataSent");
  //var thisIds = DataReceived.find((ids) => ids.Emp_ID === thisEmpId);
  const loadData = () => {
    for (x of DataReceived) {
      if (x.Emp_ID === thisEmpId) {
        setThisTrans([...thisTran, x.ID]);
      } else {
        console.log("no");
      }
      //if (x.Emp_ID === thisEmpId) {
      //setThisTrans((currentState) => [...currentState, x.ID]);
      //}
    }

    console.log(DataReceived);
    var fi = DataReceived.filter((dat) => dat.Emp_ID === thisEmpId);
    setFinal(fi);
    var total = 0;
    for (x of fi) {
      total += parseFloat(x.AttendanceNumber);
    }
    setTotalAtte(total);
    var temp = parseFloat(total) * wageof;
    setPayment(parseInt(temp));
  };
  useEffect(loadData, []);

  const saveDataToOrdinary = () => {
    var s = JSON.stringify(getTDate);
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO " +
            "paidData" +
            "(Emp_ID,TotalAtten,TotalPaid,PayDate,EmpName) VALUES(?,?,?,?,?)",

          [thisEmpId, totalatt, patment, getTDate, thisName],
          (tx, results) => {
            console.log(results);
            resolve("nice");
          },
          (tx, err) => {
            reject(err);
          }
        ),
          tx.executeSql("SELECT * FROM paidData", [], (tx, results) => {
            console.log("paidData");
            console.log(results);
            var test = results.rows._array;
            var test1 = test.pop();
            setPaidId(test1.ID);
          }),
          tx.executeSql("DELETE FROM FemaleAttendance WHERE Emp_ID=?", [
            thisEmpId,
          ]);
        for (x of final) {
          tx.executeSql(
            "UPDATE FemaleAttendanceExtra set paidID=? where ID=?",
            [paidId, x.ID],
            (tx, results) => {
              console.log("results", results.rowsAffected);
            }
          );
        }
      });
    });
  };
  const saveDataExplain = () => {};

  const paid = () => {
    if (totalatt <= 0) {
      return;
    }
    saveDataToOrdinary();
    props.navigation.goBack();
  };

  return (
    <View>
      <View style={{ height: "90%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "#ccc",
          }}
        >
          <Text>Date</Text>
          <Text>Name</Text>
          <Text>Number</Text>
        </View>
        <ScrollView>
          {final.map((data) => (
            <View key={Math.random()}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  justifyContent: "space-between",
                  backgroundColor: "white",
                }}
              >
                <View>
                  <Text>{data.AttendanceDate}</Text>
                </View>
                <View>
                  <Text>{data.Name}</Text>
                </View>
                <View>
                  <Text>{data.AttendanceNumber}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ height: "10%", flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ padding: 10 }}>
            <Text>Total Days = {final.length}</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text>Total Work Days = {totalatt}</Text>
            <Text>
              {totalatt}*{props.navigation.getParam("Wage")}={patment}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity onPress={paid}>
            <View
              style={{
                backgroundColor: "#ccc",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Text>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
PayFurther.navigationOptions = (navigationData) => {
  const EmpName = navigationData.navigation.getParam("EmployeeName");
  return {
    headerTitle: EmpName,
  };
};

const styles = StyleSheet.create({});

export default PayFurther;
