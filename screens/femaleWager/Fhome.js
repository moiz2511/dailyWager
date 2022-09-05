import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../../constants/Colors";

const Fhome = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "FattendancePage",
            })
          }
        >
          <View style={styles.attendanceContainer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              MARK ATTENDANCE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "FnewWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Add New Female Labour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "FdeleteWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Delete Female Labour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "FpayWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Pay Female Labour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "FseePaymentPage",
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

Fhome.navigationOptions = {
  headerTitle: "Female Labour Home",
};

export default Fhome;

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
  attendanceContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

    overflow: "hidden",
    backgroundColor: Colors.accentColor,
    height: 50,
  },
});
