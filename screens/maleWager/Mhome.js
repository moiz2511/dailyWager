import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const Mhome = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "MattendancePage",
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
              routeName: "MnewWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Add New Male Labour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "MdeleteWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Delete Male Labour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "MpayWagerPage",
            })
          }
        >
          <View style={styles.buttonContainer}>
            <Text style={{ color: "white" }}>Pay Male Labour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "MseePaymentPage",
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

Mhome.navigationOptions = {
  headerTitle: "Male Labour Home",
};

export default Mhome;

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
