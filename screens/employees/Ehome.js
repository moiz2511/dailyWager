import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const Ehome = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "EnewEmployeePage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Add New Employee</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "EdeleteWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Delete Employee</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "EpayWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Pay Employee</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "EseePaymentPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Check Old Record</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Ehome.navigationOptions = {
  headerTitle: "Employee Home",
};

export default Ehome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

    overflow: "hidden",
    backgroundColor: Colors.primaryColor,
    height: 50,
  },
});
