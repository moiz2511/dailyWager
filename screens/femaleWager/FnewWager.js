import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import New from "../../New";
import Colors from "../../constants/Colors";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("testWage11.db");

const FnewWager = (props) => {
  var [nowDate, setNowDate] = useState("0,0,0");

  const [usrName, setUsrName] = useState("");
  const [fatName, setFatName] = useState("");
  const [address, setAddress] = useState("");
  const [dailyWage, setDailyWage] = useState(0);

  const nameHandler = (enteredText) => {
    setUsrName(enteredText);
  };
  const fatNameHandler = (enteredText) => {
    setFatName(enteredText);
  };
  const addressHandler = (enteredText) => {
    setAddress(enteredText);
  };
  const dailyWageHandler = (enteredText) => {
    setDailyWage(enteredText);
  };
  const saveData = () => {
    if (usrName === 0 || fatName === 0 || address === 0 || dailyWage === 0) {
      Alert.alert("Wrong Input!", "You cannot submit empty Feilds", [
        { text: "Okay" },
      ]);
      return;
    }
    saveDataIntoDB(usrName, fatName, address, dailyWage, nowDate);
    props.navigation.goBack();
  };
  useEffect(() => {
    createTable();
  }, []);
  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "FemaleWagers" +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, FatherName TEXT, Address TEXT, Wage TEXT, JoinDate TEXT);"
      );
    });
  };
  const saveDataIntoDB = (name, fname, faddress, wage, joindate) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO FemaleWagers (Name,FatherName,Address,Wage,JoinDate) VALUES (?,?,?,?,?)",
        [name, fname, faddress, wage, joindate],
        (tx, results) => {
          console.log("result");
          console.log(results);
        },
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };

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
      <ScrollView style={{ margin: 10, flex: 1, padding: 10 }}>
        <View style={styles.row}>
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={nameHandler}
            keyboardType="default"
            returnKeyType="next"
          />
        </View>
        <View style={styles.row}>
          <Text>Father/Husband Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={fatNameHandler}
            keyboardType="default"
          />
        </View>
        <View style={styles.row}>
          <Text>Address:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={addressHandler}
            keyboardType="default"
          />
        </View>
        <View style={styles.row}>
          <Text>Daily Wage:</Text>
          <TextInput
            style={styles.textInput2}
            onChangeText={dailyWageHandler}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
        <View style={{ alignSelf: "center", marginVertical: 20 }}>
          <TouchableOpacity onPress={saveData}>
            <View
              style={{
                borderColor: "black",
                backgroundColor: "#ccc",
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: Colors.primaryColor, fontSize: 20 }}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

FnewWager.navigationOptions = {
  headerTitle: "Add New Female Labour",
};

export default FnewWager;

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
    paddingTop: 5,
    overflow: "hidden",
  },
  textInput: {
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textInput2: {
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    width: 50,
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
  },
});
