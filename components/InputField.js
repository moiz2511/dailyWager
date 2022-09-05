import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("testWage11.db");

const InputField = (props) => {
  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "FemaleAttendance" +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT,Emp_ID INTEGER , Name TEXT, Wage TEXT, AttendanceDate TEXT, AttendanceNumber TEXT);"
      ),
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS " +
            "FemaleAttendanceExtra" +
            "(ID INTEGER PRIMARY KEY AUTOINCREMENT,Emp_ID INTEGER , Name TEXT, Wage TEXT, AttendanceDate TEXT, AttendanceNumber TEXT,paidID INTEGER);"
        );
    });
  };
  useEffect(() => {
    createTable();
  }, []);
  const [inputValue, setInputValue] = useState("");

  const [buttonText, setButtonText] = useState("Save");
  const [isDisable, setIsDisable] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const inputHandler = (enteredvalue) => {
    setInputValue(enteredvalue);
  };
  const saveDataToDB = (id, fname, fwage, fDate, attendanceVal) => {
    console.log(attendanceVal);
    console.log(id);

    console.log(inputValue);

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO FemaleAttendance (Emp_ID,Name,Wage,AttendanceDate,AttendanceNumber) VALUES (?,?,?,?,?)",
        [id, fname, fwage, fDate, attendanceVal],
        (tx, results) => {
          console.log("result");
          console.log(results);
        },
        (tx, err) => {
          console.log(err);
        }
      ),
        tx.executeSql(
          "INSERT INTO FemaleAttendanceExtra (Emp_ID,Name,Wage,AttendanceDate,AttendanceNumber) VALUES (?,?,?,?,?)"
        );
    });
    setIsDisable(true);
    setIsEditable(false);

    setButtonText("Saved");
  };
  return (
    <View
      style={{
        flex: 1,
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              borderColor: "black",
              borderWidth: 1,

              padding: 10,
              borderRadius: 20,
              backgroundColor: "#ccc",
            }}
          >
            <Text>{props.data1.Name} testing</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.attenInput}
        keyboardType="numeric"
        maxLength={3}
        onChangeText={inputHandler}
        value={inputValue}
        editable={isEditable}
      />
      <TouchableOpacity
        onPress={saveDataToDB.bind(
          this,
          props.data1.ID,
          props.data1.Name,
          props.data1.Wage,
          props.passedDate,
          inputValue
        )}
        disabled={isDisable}
      >
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  attenInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    width: 50,
    margin: 10,
  },
});
